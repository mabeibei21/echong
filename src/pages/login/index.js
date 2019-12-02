import React, { Component } from 'react'
import Header from "../../components/header/index";
import {PageContainer} from "../../common/styled";
import { LoginPet } from "./styled";
export default class Login extends Component {
    render() {
        return (
            <PageContainer>
                <Header title="登录"/>
                <LoginPet>
					<div className="top">
						<div className="title">
							<h3>短信验证码登录</h3>
						</div>
						<div className="put">
							<input type="text" placeholder="请输入用户名" />
							<input type="password" placeholder="请输入密码" />
							<span>获取验证码</span>
						</div>
						<div className="denglu">
							<a href="#">登录</a>
						</div>
						<div className="denglu2">
							<a href="#">账号密码登录</a>
							<a href="#">新用户注册</a>
						</div>
					</div>
					<div className="top2" style={{ display: "none" }}>
						<div className="title">
							<h3>短信验证码登录</h3>
						</div>
						<div className="put">
							<input type="text" placeholder="请输入用户名" />
							<input type="password" placeholder="请输入密码" />
							<span>获取验证码</span>
						</div>
						<div className="denglu">
							<a href="#">登录</a>
						</div>
					</div>

					<div className="bottom">
						<div className="title">其他方式登录</div>
						<div className="way">
							<ul>
								<li>
									<img src="//static.epetbar.com/static_web/wap/src/images/newlogin/newother2.png" />
								</li>
								<li>
									<img src="//static.epetbar.com/static_web/wap/src/images/newlogin/newother3.png" />
								</li>
							</ul>
						</div>
						<div className="title2">
							<span>登录代表您阅读并同意</span>
							<span>《E宠商城用户协议》</span>
						</div>
					</div>
				</LoginPet>
            </PageContainer>
        )
    }
}
