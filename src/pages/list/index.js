import React, { Component } from "react";
import Header from "../../components/header/index";
import { PageContainer } from "../../common/styled";
import { SearchBox, Nav, Default, GoodsList, Body } from "./styled";
import { withRouter } from "react-router-dom";
// import { connect } from "react-redux";
@withRouter
// @connect()
class List extends Component {
	constructor() {
		super();
		this.state = {
			disapper: false
		};
	}
	render() {
		let { disapper } = this.state;
		return (
			<PageContainer>
				<Header title="商品列表" />
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
								<li onClick={this.handledefault.bind(this)}>
									默认<i className="iconfont">&#xe61d;</i>
								</li>
								<li>销量</li>
								<li>价格</li>
								<li>
									筛选<i className="iconfont">&#xe61d;</i>
								</li>
							</ul>
						</Nav>
						{/* 点击默认出现的信息 */}
						<Default style={{ display: disapper ? "block" : "none" }}>
							<div className="one">
								<span>默认排序</span>
								<i className="iconfont">&#xe65b;</i>
							</div>
							<div className="one">
								<span>按人气</span>
								<i className="iconfont">&#xe65b;</i>
							</div>
							<div className="one">
								<span>最新上架</span>
								<i className="iconfont">&#xe65b;</i>
							</div>
							<div className="one">
								<span>按销量</span>
								<i className="iconfont">&#xe65b;</i>
							</div>
						</Default>
						{/* 商品列表 */}
						<GoodsList>
							<div onClick={this.handleDetailTo.bind(this)} className="zhong">
								<div className="left">
									<img src="https://img2.epetbar.com/common/upload/commonfile/2019/011/12/165143_275299.jpg@!300w-b" />
								</div>
								<div className="right">
									<h6>中国台湾发育宝 小中型犬用钙胃能散 5g*20袋</h6>
									<h5>￥120.00</h5>
									<p>
										<span>互动:(98%好评)</span>
										<strong>售出:2.74w</strong>
										<i className="iconfont">&#xe614;</i>
									</p>
								</div>
							</div>
							<div className="zhong">
								<div className="left">
									<img src="https://img2.epetbar.com/common/upload/commonfile/2019/011/12/165143_275299.jpg@!300w-b" />
								</div>
								<div className="right">
									<h6>中国台湾发育宝 小中型犬用钙胃能散 5g*20袋</h6>
									<h5>￥120.00</h5>
									<p>
										<span>互动:(98%好评)</span>
										<strong>售出:2.74w</strong>
										<i className="iconfont">&#xe614;</i>
									</p>
								</div>
							</div>
							<div className="zhong">
								<div className="left">
									<img src="https://img2.epetbar.com/common/upload/commonfile/2019/011/12/165143_275299.jpg@!300w-b" />
								</div>
								<div className="right">
									<h6>中国台湾发育宝 小中型犬用钙胃能散 5g*20袋</h6>
									<h5>￥120.00</h5>
									<p>
										<span>互动:(98%好评)</span>
										<strong>售出:2.74w</strong>
										<i className="iconfont">&#xe614;</i>
									</p>
								</div>
							</div>
						</GoodsList>
					</div>
				</Body>
			</PageContainer>
		);
	}
	handledefault() {
		this.setState({
			disapper: !this.state.disapper
		});
	}
	handleDetailTo() {
		this.props.history.push("detail");
	}
}

export default List;
