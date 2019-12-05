import React, { Component } from "react";
import Header from "../../components/header/index";
import { PageContainer } from "../../common/styled";
import { LoginPet } from "./styled";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { mapStateToProps, mapDispatchToProps } from "./mapStore";
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class Login extends Component {
	constructor() {
		super();
		this.state = {
			user: "",
			pass: "",
			logOrRes: "none",
			logOrRes2: "block"
		};
	}
	render() {
		return (
			<PageContainer>
				<Header title="登录" />
				<LoginPet>
					<div className="top" style={{ display: this.state.logOrRes2 }}>
						<div className="title">
							<h3>短信验证码登录</h3>
						</div>
						<div className="put">
							<input
								type="text"
								placeholder="请输入用户名"
								onChange={this.handleUser.bind(this)}
							/>
							<input
								type="password"
								placeholder="请输入密码"
								onChange={this.handlePass.bind(this)}
							/>
							<span>获取验证码</span>
						</div>
						<div className="denglu">
							<span onClick={this.handleLogin.bind(this)}>登录</span>
						</div>
						<div className="denglu2">
							<a href="#">账号密码登录</a>
							<span
								style={{ float: "right" }}
								onClick={this.handleChange.bind(this)}
							>
								新用户注册
							</span>
						</div>
					</div>
					<div className="top2" style={{ display: this.state.logOrRes }}>
						<div className="title">
							<h3>短信验证码登录</h3>
						</div>
						<div className="put">
							<input type="text" placeholder="请输入用户名" />
							<input type="password" placeholder="请输入密码" />
							<span>获取验证码</span>
						</div>
						<div className="denglu">
							<span onClick={this.handleRes.bind(this)}>注册</span>
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
		);
	}
	handleUser(e) {
		let val = e.target.value;
		this.setState({
			user: val
		});
		// console.log(e.target.value);
		// this.props.handleuser();
	}
	handlePass(e) {
		let val = e.target.value;
		this.setState({
			pass: val
		});
		// console.log(e.target.value);
		// this.props.handlepass();
	}
	handleLogin() {
		let user = this.state.user;
		let psd = this.state.pass;
		this.props.handleLoginAsync(user, psd);
		if (this.props.info.code == 0) {
			alert(this.props.info.info);
		}
		if (this.props.info.code == 1) {
			alert(this.props.info.info);
			this.props.history.push("/");
		}
	}
	handleRes() {
		let user = this.state.user;
		let psd = this.state.pass;
		this.props.handleRegisterAsync(user, psd);
	}
	handleChange() {
		this.setState({
			logOrRes: "block",
			logOrRes2: "none"
		});
	}
}
export default Login;
