import React, { Component } from "react";
import { PageContainer } from "../../common/styled";
import {
	Slider,
	Top,
	Nav,
	Tu1,
	Tu2,
	Section,
	Tu3,
	Rushed,
	AllBuy,
	Like
} from "./styled";
import { withRouter } from "react-router-dom";
// import Weekchoice from "";
import CartImg from "./Hcart.png";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore";
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class Select extends Component {
	render() {
		let { Sberserk, Segroup, like } = this.props;
		return (
			<PageContainer>
				<Section onScroll={this.props.handleScroll.bind(this)} ref="bodyBox">
					<div className="content">
						<Slider>
							<img src="https://img2.epetbar.com/2019-11/27/18/1c0b6142bb59f46096a4a3e2d0374d9d.jpg?x-oss-process=style/water" />
						</Slider>
						<Top>
							<div className="top">
								<div className="sousuo">
									<p onClick={this.props.handleSearch.bind(this)}>
										<i className="iconfont">&#xe623;</i>
										<span>请输入搜索内容</span>
									</p>
									<i className="iconfont">&#xe9b2;</i>
								</div>
								<div className="nav">
									<ul>
										<li className="jing">精选</li>
										<li onClick={this.props.handleDogFood.bind(this)}>
											进口狗粮
										</li>
										<li>国产狗粮</li>
										<li>内外驱虫</li>
										<li>
											<img src="https://img2.epetbar.com/2019-10/12/11/297925c78a7887a43c14420332d70f5b.png" />
										</li>
										<li>五官护理</li>
										<li>外出用品</li>
									</ul>
								</div>
							</div>
						</Top>
						{/* 中间导航 */}
						<Nav>
							<img src="https://img2.epetbar.com/2019-11/15/23/e172686fcd97b548ebfcb62c694f2801.png@!water" />
							<img
								onClick={this.props.handleEgroup.bind(this)}
								src="https://img2.epetbar.com/2019-11/15/23/3fe5bbce73f303015077ed7a827de61c.png@!water"
							/>
							<img src="https://img2.epetbar.com/2019-11/18/11/2fc10590dceefa9e3db0b32cdc5292fd.gif" />
							<img src="https://img2.epetbar.com/2019-11/18/11/0c37c313f2d988dad4173881cd02a988.png@!water" />
							<img
								onClick={this.props.handleClearGoods.bind(this)}
								src="https://img2.epetbar.com/2019-11/16/00/1ec58c7b09ad2baa80e57609d87b6244.png@!water"
							/>
						</Nav>
						{/* 图的组合 */}
						<Tu1>
							<img
								className="tu1"
								src="https://img2.epetbar.com/2019-11/12/16/96737a4e9141f4cf31d455412b077a3d.jpg?x-oss-process=style/water"
							/>
							<img
								className="tu2"
								src="https://img2.epetbar.com/2019-11/11/15/20dca16cc75000fee0f3366f15556013.jpg?x-oss-process=style/water"
							/>
						</Tu1>

						<Tu2>
							<div className="left">
								<img src="https://img2.epetbar.com/2019-11/22/18/2ba78e8d92c409e749941ba6d59c0be5.gif?x-oss-process=style/water" />
							</div>
							<div className="right">
								<img
									onClick={this.props.handleNewGutse.bind(this)}
									src="https://img2.epetbar.com/2019-11/28/19/590bbefef571b3a5406abee766169372.jpg?x-oss-process=style/water"
								/>
								<img src="https://img2.epetbar.com/2019-11/28/19/6803e8645c76b6c2bdff934195637422.jpg?x-oss-process=style/water" />
								<img src="https://img2.epetbar.com/2019-11/28/19/326552320bcf70e4e2f5f1fd47c6bc1e.jpg?x-oss-process=style/water" />
							</div>
						</Tu2>
						<Tu3>
							<img src="https://img2.epetbar.com/2019-11/13/00/2fe511e37fd09462deae2091dbb0e6b4.gif?x-oss-process=style/water" />
						</Tu3>
						{/* 每日疯抢 */}
						<Rushed>
							<div className="zuo">
								<div className="tuu">
									<img src="https://static.epetbar.com/static_wap/appmall/main/index_icon_berserk_mark_415.png?version=03" />
									<h6>
										<span>20点场</span>
										<b>正在疯抢</b>
									</h6>
								</div>
								{Sberserk.map((item, index) => (
									<div className="zuohe" key={index}>
										<div
											onClick={this.props.handleRobDay.bind(this)}
											className="zuozuo"
										>
											<img src={item.image.img_url} />
											<h6>￥{item.sale_price}</h6>
											<h5>
												<del>￥{item.little_price}</del>
											</h5>
										</div>
									</div>
								))}
							</div>

							<div className="zuo">
								<div className="tuu">
									<img src="https://static.epetbar.com/static_wap/appmall/main/index_icon_egroup_415.png?version=03" />
								</div>
								{Segroup.map((item, index) => (
									<div className="zuohe" key={index}>
										<div className="zuozuo">
											<img src={item.image.img_url} />
											<h6>￥{item.sale_price}</h6>
											<h5>
												<del>￥{item.little_price}</del>
											</h5>
										</div>
									</div>
								))}
							</div>
						</Rushed>
						{/* 大家都在买 */}
						<AllBuy>
							<div className="buy">
								<img
									className="tu1"
									src="https://img2.epetbar.com/2019-11/30/15/e6264d82e96fbaeff171c06c2dabc329.png?x-oss-process=style/water"
								/>
								<img
									className="tu2"
									src="https://img2.epetbar.com/2019-11/30/16/28d785474fbf16dbfdeea67e67c0dce2.png?x-oss-process=style/water"
								/>
							</div>
							{/* 小萌书 */}
							<div className="book">
								<img
									className="tutop"
									src="https://img2.epetbar.com/2019-11/30/15/92f68c791cfaf290efd4018713af80a7.png?x-oss-process=style/water"
								/>
								<img
									className="tubottom"
									src="https://img2.epetbar.com/2019-11/30/16/7a6588914bd812254e8706dbb1a8b37a.jpg?x-oss-process=style/water"
								/>
							</div>
						</AllBuy>
						{/* 猜你喜欢 */}
						<Like>
							<div className="guess">
								<h5>
									<img src="https://img2.epetbar.com/nowater/2018-10/18/20/3fbb022a3225b959f51312c47f378016.png" />
								</h5>
								{like.map((item, index) => (
									<div className="box" key={index}>
										<div className="box1">
											<img src={item.good_image.img_url} />
											<p>{item.subject}</p>
											<h6>
												<span>￥{item.sale_price}</span>
												<i>
													<img src={CartImg} />
												</i>
											</h6>
										</div>
									</div>
								))}
							</div>
						</Like>
					</div>
				</Section>
			</PageContainer>
		);
	}
	componentDidMount() {
		this.props.handleWeekAsyncData();
	}
}

export default Select;
