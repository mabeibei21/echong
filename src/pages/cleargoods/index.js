import React, { Fragment } from "react";
import Header from "../../components/header/index";
import { Goods } from "./styled";
class Cleargoods extends React.Component {
	render() {
		return (
			<Goods>
				<Header title="清仓特价"/>
				<div className="banner">
					<img src="https://img2.epetbar.com/2019-11/13/14/fa5adb415319094a86e279387e3669cd.png?x-oss-process=style/water" />
				</div>
				<div className="sort">
					<span>折扣</span>
					<span>价格</span>
					<span>筛选</span>
				</div>
				<div className="bg"></div>
				<div className="wrap">
					<ul>
						<li>
							<div className="top">
								<span className="fontRed">我不新鲜</span>
								<span>2020-01-04到期</span>
								<div className="zhe">
									<div className="p-top">3.2折</div>
									<div className="p-bottom"></div>
								</div>
							</div>
							<div className="bottom">
								<div className="left">
									<img src="https://img2.epetbar.com/2018-12/20/16/4eac07005ce949fcc7cdcd220f3bd7c2.jpg?x-oss-process=style/fill&$1=300&$2=300" />
								</div>
								<div className="right">
									<p className="p1">强生宠儿JSPET 猫泌尿道粉 1g*10条/盒</p>
									<span>
										￥22.40
										<del>￥70.00</del>
									</span>
									<div>
										<span>
											<span>省</span>
											<b>￥47.6</b>
										</span>

										<img src="https://static.epetbar.com/static_wap/epetapp/pages/clear_ware/images/cart-new.png" />
									</div>
								</div>
							</div>
							<div className="bg"></div>
						</li>
						<li>
							<div className="top">
								<span className="fontRed">我不新鲜</span>
								<span>2020-01-04到期</span>
								<div className="zhe">
									<div className="p-top">3.2折</div>
									<div className="p-bottom"></div>
								</div>
							</div>
							<div className="bottom">
								<div className="left">
									<img src="https://img2.epetbar.com/2018-12/20/16/4eac07005ce949fcc7cdcd220f3bd7c2.jpg?x-oss-process=style/fill&$1=300&$2=300" />
								</div>
								<div className="right">
									<p className="p1">强生宠儿JSPET 猫泌尿道粉 1g*10条/盒</p>
									<span>
										￥22.40
										<del>￥70.00</del>
									</span>
									<div>
										<span>
											<span>省</span>
											<b>￥47.6</b>
										</span>

										<img src="https://static.epetbar.com/static_wap/epetapp/pages/clear_ware/images/cart-new.png" />
									</div>
								</div>
							</div>
							<div className="bg"></div>
						</li>
					</ul>
				</div>
			</Goods>
		);
	}
}

export default Cleargoods;
