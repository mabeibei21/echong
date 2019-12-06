import React, { Component, Fragment } from "react";
import { Shai } from "./styled";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
	mapStateToProps,
	mapDispatchToProps
} from "../../pages/cleargoods/mapStort";
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class ShaiXuan extends Component {
	constructor(props) {
		super(props);
		this.state = {
			flag: 0,
			flag2: 0,
			flag3: 0,
			sel: ["取消", "确认"],
			cateid: ""
		};
	}
	render() {
		console.log(this.props);
		console.log(this.props.style.display);
		let { list, type } = this.props.shaixuan;
		return (
			<Fragment>
				<Shai ref="xuan" style={{ display: this.props.style.display }}>
					<div className="top">
						<ul>
							{type
								? type.map((item, index) => (
										<li
											key={item.type}
											className={this.state.flag === index ? "active1" : ""}
											onClick={this.handleType.bind(this, index)}
										>
											{item.name}
										</li>
								  ))
								: ""}
						</ul>
					</div>
					<div className="list">
						<ul className="left">
							{list
								? list.map((item, index) => (
										<li
											key={item.cateid}
											className={this.state.flag2 === index ? "active3" : ""}
											onClick={this.handleList.bind(this, index, item.cateid)}
										>
											{item.catename}
										</li>
								  ))
								: ""}
						</ul>
						<div className="right"></div>
					</div>
					<div className="foot">
						{this.state.sel.map((item, index) => (
							<div
								key={item}
								className={this.state.flag3 === index ? "active2" : ""}
								onClick={this.handleSel.bind(this, index, item)}
							>
								{item}
							</div>
						))}
					</div>
				</Shai>
			</Fragment>
		);
	}
	handleType(index) {
		this.setState({ flag: index });
	}
	handleList(index, id) {
		this.setState({ flag2: index, cateid: id });
	}
	handleSel(index, item) {
		this.setState({ flag3: index });
		if (item === "取消") {
			this.refs.xuan.style.display = "none";
		} else {
			this.props.handleClearList(1, "up", this.state.cateid);
			this.refs.xuan.style.display = "none";
		}
	}
}

export default ShaiXuan;
