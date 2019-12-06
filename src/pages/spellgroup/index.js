import React, { Fragment } from "react";
import Header from "../../components/header/index";
import { Spelles } from "./styled";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { mapStateToProps, mapDispatchToProps } from "./mapstore";
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class Spellgroup extends React.Component {
	constructor() {
		super();
		this.state = {
			navflag: 0,
			page: 0
		};
	}
	render() {
		let { classifys, list } = this.props.data;
		return (
			<Fragment>
				<Header title="E宠拼团" />
				<Spelles>
					<ul className="nav">
						{classifys
							? classifys.map((item, index) => (
									<li
										key={index}
										className={this.state.navflag === index ? "active" : ""}
										onClick={this.handleNav.bind(this, index, item.class_id)}
									>
										{item.class_name}
									</li>
							  ))
							: ""}
					</ul>
					<div className="wrap">
						<ul className="main">
							{list
								? list.map((item, index) => (
										<li key={index}>
											<span>{item.badage.msg}</span>
											<div className="f">
												<img src={item.photo} />
											</div>
											<div className="r">
												<p>{item.subject}</p>
												<p>{item.group_tag_list[0].tag_val}</p>
												<span>
													<span>¥ </span>
													<b>{item.price_list[0].price}</b>
												</span>
												<em>{item.sale_price}</em>
											</div>
										</li>
								  ))
								: ""}
						</ul>
					</div>
				</Spelles>
			</Fragment>
		);
	}
	componentDidMount() {
		this.props.handleSpellList(0, 1);
	}
	handleNav(index, id) {
		this.setState({ navflag: index });
		this.props.handleSpellList(id, 1);
	}
}

export default Spellgroup;
