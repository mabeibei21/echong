import React, { Fragment } from "react";
import Header from "../../components/header/index";
import { Goods } from "./styled";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { mapStateToProps, mapDispatchToProps } from "./mapStort";
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class Cleargoods extends React.Component {
	constructor() {
		super();
		this.state = {
			sort: "",
			sortFlag: true,
			sortflag: 0,
			sortText: ["折扣", "价格"]
		};
	}
	render() {
		let { adv, list } = this.props.goods_list;
		let { sys_time } = this.props;
		return (
			<Goods>
				<Header title="清仓特价" />
				<div className="banner">
					<img src={adv ? adv.image : ""} />
				</div>
				<div>
					{this.state.sortText.map((item, index) => (
						<span
							onClick={this.handleSort.bind(this, index)}
							key={index}
							className={index == this.state.sortflag ? this.state.sort : ""}
						>
							{item}
						</span>
					))}
					<span>筛选</span>
				</div>
				<div className="bg"></div>
				<div className="wrap">
					<ul>
						{list
							? list.map((item, index) => (
									<li
										onClick={this.handleNext.bind(this, sys_time)}
										key={item.gid}
									>
										<div className="top">
											<span className="fontRed">{item.typename}</span>
											<span>{item.clear_caption}</span>
											<div className="zhe">
												<div className="p-top">{item.discount}</div>
												<div className="p-bottom"></div>
											</div>
										</div>
										<div className="bottom">
											<div className="left">
												<img src={item.photos[0]} />
											</div>
											<div className="right">
												<p className="p1">{item.subject}</p>
												<span>
													{"￥" + item.zprice}
													<del>{"￥" + item.sale_price}</del>
												</span>
												<div>
													<span>
														<span>省</span>
														<b>{"￥" + item.less}</b>
													</span>

													<img src="https://static.epetbar.com/static_wap/epetapp/pages/clear_ware/images/cart-new.png" />
												</div>
											</div>
										</div>
										<div className="bg"></div>
									</li>
							  ))
							: ""}
					</ul>
				</div>
			</Goods>
		);
	}

	componentDidMount() {
		this.handleAsyncList();
	}
	handleAsyncList() {
		this.props.handleClearList();
	}
	handleSort(index) {
		if (this.state.sortFlag) {
			this.setState({
				sort: "sortup",
				sortFlag: !this.state.sortFlag,
				sortflag: index
			});
			this.props.handleClearList("up");
		} else {
			this.setState({ sort: "sortdown", sortFlag: !this.state.sortFlag });
			this.props.handleClearList("down");
		}
		console.log(this.state.sort);
	}
	handleNext(gid) {
		console.log(gid, "cleargoods,106行");
		this.props.handleGid(gid);
		console.log(gid);
		this.props.history.push("/detail");
	}
}

export default Cleargoods;
