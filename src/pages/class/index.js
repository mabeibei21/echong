import React, { Component } from "react";
import { PageContainer } from "../../common/styled";
import { Classifyi, Head } from "./styled";
import Tab2 from "../../components/tab2/index";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { mapStateToProps, mapDispatchToProps } from "./mapStore";
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class Class extends Component {
	constructor() {
		super();
		this.state = {
			flag: "block",
			flag1: "none",
			index_flag: 0,
			green: "green",
			green0: ""
		};
	}
	render() {
		console.log(this.props);
		let { hot_list, pic_list, tab2_list } = this.props;

		return (
			<PageContainer>
				<Head>
					<div className="sortHead">
						<div onClick={this.handleChange1.bind(this)}>
							<p className={this.state.green}>分类</p>
						</div>
						<div onClick={this.handleChange2.bind(this)}>
							<p className={this.state.green0}>品牌</p>
						</div>
						<a href="">
							<img
								src="https://static.epetbar.com/static_web/wap/src/images/background/search-ico.png"
								alt="#"
							/>
						</a>
					</div>
				</Head>

				<Classifyi fl={this.state.flag}>
					<div className="sortBody">
						<div className="left">
							<ul>
								{hot_list.map((item, index) => {
									return (
										<li
											className={
												index == this.state.index_flag ? "xuanZhong" : ""
											}
											key={item.cateid}
											onClick={() => {
												{
													this.handleListchange(index, item.cateid);
												}
											}}
										>
											{item.name}
										</li>
									);
								})}
							</ul>
						</div>
						<div className="right">
							<div className="right-content">
								<a href="" className="right-title">
									热门分类
								</a>
								<ul>
									{pic_list.map((item, index) => {
										return (
											<li key={index}>
												<a href="#">
													<div>
														<img src={item.photo} alt="#" />
													</div>
													<p>{item.name}</p>
												</a>
											</li>
										);
									})}
								</ul>
							</div>
						</div>
					</div>
				</Classifyi>
				<Tab2 fl={this.state.flag1} list={tab2_list}></Tab2>
			</PageContainer>
		);
	}
	componentDidMount() {
		this.handleAsyncList();
	}
	handleAsyncList() {
		this.props.handlepicList();
		this.props.handlehotList();
		this.props.handletab2List();
	}
	handleListchange(index, owner) {
		this.setState({ index_flag: index });
		if (index === 1) {
			this.props.handleGuoList();
		} else {
			this.props.handlepicList(owner);
		}
	}
	handleChange1() {
		this.setState({ flag: "block", green: "green", flag1: "none", green0: "" });
	}
	handleChange2() {
		this.setState({
			flag: "none",
			green: "",
			flag1: "block",
			green0: "green"
		});
	}
}

export default Class;
