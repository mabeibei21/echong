import React, { Component } from "react";
import { PageContainer } from "../../common/styled";
import Header from "../../components/header/index";
import { NavSec, NavThree, Share, Body } from "./styled";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore";
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class Book extends Component {
	render() {
		let { book } = this.props;
		let books = [];
		book.map(item => {
			if (item.type === 1) {
				books.push(item);
			}
		});
		return (
			<PageContainer>
				<Header title="小萌书" />
				<Body>
					<div className="container">
						<NavSec>
							<div className="top">
								<ul>
									<li>
										<i className="iconfont">&#xe67b;</i>狗狗
									</li>
									<li>
										<i className="iconfont">&#xe623;</i>请输入搜索内容
									</li>
									<li>
										<i className="iconfont">&#xe9b2;</i>
									</li>
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
						{/* <Route path="/book/book2" component={Book2}></Route> */}
						{/* 能不能吃 导航3 */}
						<NavThree>
							<ul>
								<li>
									<img
										alt=""
										src="https://static.epetbar.com/static_wap/content/opgc/image/eat.png"
									/>
								</li>
								<li>
									<img
										alt=""
										src="https://static.epetbar.com/static_wap/content/opgc/image/diseasePet.png"
									/>
								</li>
								<li>
									<img
										alt=""
										src="https://static.epetbar.com/static_wap/content/opgc/image/moreTool.png"
									/>
								</li>
								<li>
									<img
										alt=""
										src="https://static.epetbar.com/static_wap/content/opgc/image/protectPet.png"
									/>
								</li>
								<li>
									<img
										alt=""
										src="https://static.epetbar.com/static_wap/content/opgc/image/knowledgeBase.png"
									/>
								</li>
							</ul>
						</NavThree>
						{/* 经验分享 */}
						<Share>
							{books.map((item, index) => (
								<div className="bao" key={index}>
									<div className="tutu">
										<img alt="" src={item.data.cover.img_url} />
										<div className="ppp">
											<h6>{item.data.title}</h6>
											<h5>{item.data.describe}</h5>
										</div>
									</div>
									<div className="zi">
										<p>
											<img alt="" src={item.data.user.avatar.img_url} />
											{item.data.user.username}
										</p>
										<a>
											<img alt="" src="../../../public/img/Btu.png" />2
										</a>
									</div>
								</div>
							))}
						</Share>
					</div>
				</Body>
			</PageContainer>
		);
	}
	componentDidMount() {
		this.props.handleBookAsyncData();
	}
}

export default Book;
