import React from "react";
import { Tab } from "./styled";
class Tab2 extends React.Component {
	render() {
		let { list } = this.props;
		return (
			<Tab>
				<div className="wrapp">
					{list.map((item, index) => {
						return (
							<div className="wrap" key={index}>
								<div className="title">{"——" + item.title + "——"}</div>
								<ul>
									{item.list.map((ites, ind) => {
										return (
											<li key={ind}>
												<div>
													<img src={ites.logo} />
												</div>
												<p>{ites.name}</p>
												<span>{ites.address}</span>
											</li>
										);
									})}
								</ul>
								<p className="bgg"></p>
							</div>
						);
					})}
				</div>
			</Tab>
		);
	}
}

export default Tab2;
