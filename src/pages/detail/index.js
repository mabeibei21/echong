import React, { Component } from "react";
import Header from "../../components/header/index";
import { PageContainer } from "../../common/styled";
import { Top, Mation, Estimate, Buttono, Section } from "./styled";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore";
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class Detail extends Component {
	render() {
		let { pic, detail } = this.props;
		console.log(pic);
		return (
			<PageContainer>
				<Header title="商品 详情 评价" />
				<Section>
					<Top>
						<div className="banner">
							<div>
								{pic.map((item, index) => {
									return <img src={item.image} alt="" />;
								})}
							</div>
						</div>

						<div className="title">
							<span>{detail.subject}</span>
						</div>
						<div className="free">
							<span>{detail.presubject}</span>
						</div>
						<div className="">
							<b>{detail.sale_price}</b>
							<del className="JX" id="detailsJXJ_jxj">
								<span>
									<s>{detail.market_price}</s>
								</span>
							</del>
							<div>
								<img
									alt="#"
									src="https://static.epetbar.com/static_wap/appmall/lib/goods/quality_assurance.png"
								/>
							</div>
						</div>
						<div className="bg"></div>
					</Top>
					<Mation>
						<div className="a2">
							<span>已选:</span>
							<em>'鱼皮小丁'</em>
						</div>
						<div className="a3">
							<h3>配方</h3>
							<ul>
								{pic.map((item, index) => {
									return <li></li>;
								})}
							</ul>
						</div>
						<div className="bg"></div>
						<div className="a4">
							<div className="amount">
								<span>购买数量</span>
								<p>
									<span type="button" value="-" />
									<span type="text" value="1" />
									<span type="button" value="+" />
								</p>
							</div>
						</div>
						<div className="bg"></div>
						<div className="a5">
							<div>
								<span>送至</span>
								<span>🥚</span>
								<span>北京</span>
								<span>东城区</span>
							</div>

							<b>&gt;</b>
						</div>
						<div className="a6">
							<span>
								<img
									alt="#"
									src="https://static.epetbar.com/static_wap/appmall/lib/goods/qualityassurance.png"
								/>
								<span>正品保证</span>
							</span>
							<span>
								<img
									alt="#"
									src="https://static.epetbar.com/static_wap/appmall/lib/goods/freeshipping.png"
								/>
								<span>99元包邮</span>
							</span>
							<span>
								<img
									alt="#"
									src="https://static.epetbar.com/static_wap/appmall/lib/goods/thirtydays.png"
								/>
								<span>30天退货</span>
							</span>
						</div>
						<div className="bg"></div>
						<div className="a7">
							<div className="nav">
								<span>
									<i className="iconfont">&gt;</i>
									<span>精选评价</span>
									<span>(41)</span>
								</span>

								<span className="fr">
									<span>好评率</span>
									<span>100%</span>
									<span>&gt;</span>
								</span>
							</div>
							<ul>
								{pic.map((item, index) => (
									<li key={index}>
										<div className="top">
											<div className="left">
												<img alt="#" src={item.avatar} />
											</div>
											<div className="middle">
												<p>{item.disname}</p>
												<p>{item.join_time}</p>
											</div>
											<div className="right">
												<img alt="#" src={item.group_icon} />
												<img
													alt="#"
													src={
														"https://static.epetbar.com/static_web/pc/src/images/vip/v4.png"
													}
												/>
											</div>
										</div>
										<div className="bottom">
											<p>没买成吧 不知道吃后效果</p>
											<img
												alt="#"
												src="https://img2.epetbar.com/2019-09/22/00/ec913fab6a820d829b043c7442f46d85.jpg?x-oss-process=style/cut&$1=100&$2=100"
											/>
										</div>
									</li>
								))}
								<div className="look">
									<a href="#">查看全部评价</a>
									<a href="#">查看购买咨询</a>
								</div>
							</ul>
						</div>
						<div className="bg"></div>
					</Mation>
					<Estimate>
						<div className="foot">
							<div className="ps2">
								<div className="ps21">
									<div>
										<img
											alt="#"
											src="https://img2.epetbar.com/brand/brandLogo/purchase_suppliers_file_1536288944.png"
											alt=""
										/>
									</div>
									<div>
										<p>麦富迪Myfoodie</p>
										<p>让宠爱更专业</p>
									</div>
									<div>
										<p>+关注</p>
									</div>
								</div>
								<div className="ps22">
									<ul>
										<li>
											<p>545</p>
											<p>宠爱更专</p>
										</li>
										<li>
											<p>456</p>
											<p>宠爱更专</p>
										</li>
										<li>
											<p>2</p>
											<p>宠爱更专</p>
										</li>
									</ul>
								</div>
							</div>
							<div className="btn">
								<span type="button" value="查看商品" />
								<span type="button" value="进入品牌馆" />
							</div>
						</div>
					</Estimate>
				</Section>
				<Buttono>
					<div className="details-bottom">
						<a href="#">
							<b></b>
							<span>收藏</span>
						</a>
						<a href="#">
							<b>
								<span className="num">0</span>
							</b>
							<span>购物车</span>
						</a>
						<a onClick={this.handleAddCart.bind(this)}>加入购物车</a>
					</div>
				</Buttono>
			</PageContainer>
		);
	}

	componentDidMount() {
		this.handleAsyncList();
	}
	handleAsyncList() {
		console.log(this.props, "22222222");
		this.props.handleDetailData();
	}

	handleAddCart() {
		this.props.history.push("cart");
	}
}

export default Detail;
