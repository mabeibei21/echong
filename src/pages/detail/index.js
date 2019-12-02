import React, { Component } from 'react'
import Header from "../../components/header/index";
import {PageContainer} from "../../common/styled";
import {Top, Mation, Estimate, Buttono,Section } from "./styled";
import {withRouter} from "react-router-dom";
@withRouter
class Detail extends Component {
    render() {
        return (
            <PageContainer>
                <Header title="商品 详情 评价"/>
                <Section>
					<Top>
						<div className="banner">
							<div>
								<img src="https://img2.epetbar.com/goods/sales/20190829145632_257931.jpg?x-oss-process=style/cut&$1=500&$2=500" />
							</div>
						</div>
						<div className="title">
							<span>海洋之星 小型犬用纯鱼皮小丁 100g </span>
						</div>
						<div className="free">
							<span>英国品牌 全鱼配方 风靡全球的优质食品</span>
						</div>
						<div className="price">
							<em>￥</em>
							<b>39.00</b>
							<del className="priceJX" id="detailsPriceJXJ_jxj">
								<span>
									<s>￥69.00</s>
								</span>
							</del>
							<div>
								<img src="https://static.epetbar.com/static_wap/appmall/lib/goods/quality_assurance.png" />
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
								<li>
									<span>鱼皮薄片</span>
								</li>
								<li>
									<span> 鱼皮小丁</span>
								</li>
								<li>
									<span>鱼皮薄片</span>
								</li>
								<li>
									<span> 鱼皮小丁</span>
								</li>
								<li>
									<span>鱼皮薄片</span>
								</li>
								<li>
									<span> 鱼皮小丁</span>
								</li>
							</ul>
						</div>
						<div className="bg"></div>
						<div className="a4">
							<div className="amount">
								<span>购买数量</span>
								<p>
									<input type="button" value="-" />>
									<input type="text" value="1" />>
									<input type="button" value="+" />>
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
								<img src="https://static.epetbar.com/static_wap/appmall/lib/goods/qualityassurance.png" />
								<span>正品保证</span>
							</span>
							<span>
								<img src="https://static.epetbar.com/static_wap/appmall/lib/goods/freeshipping.png" />
								<span>99元包邮</span>
							</span>
							<span>
								<img src="https://static.epetbar.com/static_wap/appmall/lib/goods/thirtydays.png" />
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
								<li>
									<div className="top">
										<div className="left">
											<img src="https://img1.epetbar.com/2018-12/09/16/5f7173438d1191bedfd074bdf17bde22.jpg?x-oss-process=style/cut&$1=50&$2=50" />
										</div>
										<div className="middle">
											<p>团***子</p>
											<p>加入E宠1425天</p>
										</div>
										<div className="right">
											<img src="https://static.epetbar.com/skin/images/pt5.gif" />
											<img src="https://static.epetbar.com/static_web/pc/src/images/vip/v4.png" />
										</div>
									</div>
									<div className="bottom">
										<p>没买成吧 不知道吃后效果</p>
										<img src="https://img2.epetbar.com/2019-09/22/00/ec913fab6a820d829b043c7442f46d85.jpg?x-oss-process=style/cut&$1=100&$2=100" />
									</div>
								</li>
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
								<input type="button" value="查看商品" />
								<input type="button" value="进入品牌馆" />
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
        )
    }
    handleAddCart(){
        this.props.history.push("cart")
    }
}

export default Detail;