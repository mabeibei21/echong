import React, { Fragment } from "react";
import Header from "../../components/header/index";
import { PageContainer } from "../../common/styled";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore";
import { Body, Tu, Intro } from "./styled";
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class NewGuest extends React.Component {
	render() {
		let { like } = this.props;
		return (
			<PageContainer>
				<Header title="新客主粮趴" />
				<Body>
					<div className="big">
						{/* 开始的主图 */}
						<Tu>
							<img
								alt=""
								src="https://img2.epetbar.com/nowater/2019-09/06/11/8a0565fd42aceba2d3b8dd3005f6a23a.jpg@!water"
							/>
							<img
								alt=""
								src="https://img2.epetbar.com/nowater/2019-09/06/11/8e341714f2a703fd98d2ba6b06857fb9.jpg@!water"
							/>
						</Tu>
						{/* 人气推荐 */}
						<Intro>
							{like.map((item, index) => (
								<div className="intro" key={index}>
									<img alt="" src={item.good_image.img_url} />
									<h6>{item.subject}</h6>
									<h5>
										<span>￥{item.sale_price}</span>
										<del>￥852.00</del>
									</h5>
									<h4>立即购买</h4>
								</div>
							))}
						</Intro>
					</div>
				</Body>
			</PageContainer>
		);
	}
	componentDidMount() {
		this.props.handleNewGuest();
	}
}

export default NewGuest;
