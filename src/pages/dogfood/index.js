import React, { Component } from "react";
import Header from "../../components/header/index";
import { PageContainer } from "../../common/styled";
import { PetFood } from "./styled";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { mapStateToProps, mapDispatchToProps } from "./mapStore";
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class DogFood extends Component {
	render() {
		let { food, list } = this.props;
		if (food) {
			food = food.datas;
			if (food) {
				food = food.list;
				console.log();
			}
		}
		if (list) {
			list = list.data;
		}
		console.log(food, "food", list, "list");

		return (
			<PageContainer>
				<Header title="进口狗粮" />
				<PetFood>
					<div className="wrap">
						<div className="banner">
							<img alt="" src={food ? food[0].data.images[0].img_url : ""} />
							<img
								alt=""
								src={food ? food[1].data.column_images[0][0].img_url : ""}
							/>
						</div>
						<div className="nav">
							<img
								alt=""
								src={food ? food[2].data.column_images[0][0].img_url : ""}
							/>
							<ul>
								{food
									? food[3].data.column_images.map(item => (
											<li>
												<img src={item[0].img_url} alt="" />{" "}
											</li>
									  ))
									: ""}
							</ul>
							<img
								alt=""
								src={food ? food[4].data.column_images[0][0].img_url : ""}
							/>
							<div className="zhishi">
								<img
									alt=""
									src={food ? food[5].data.column_images[0][0].img_url : ""}
								/>
							</div>

							<div className="lf">
								{food
									? food[6].data.column_images.map(item => (
											<img src={item[0].img_url} alt="" />
									  ))
									: ""}
							</div>
							<div className="zhishi">
								<img
									alt=""
									src={food ? food[7].data.column_images[0][0].img_url : ""}
								/>
							</div>
						</div>
						<div className="list">
							<ul>
<<<<<<< HEAD
								{food
									? food[8].data.column_images[0].map(item => (
											<li>
												<img src={item.img_url} alt="" />
											</li>
									  ))
									: ""}
								{food
									? food[8].data.column_images[1].map(item => (
											<li>
												<img src={item.img_url} alt="" />
											</li>
									  ))
									: ""}
							</ul>
							<div>
								<img
									alt=""
									src={food ? food[9].data.column_images[0][0].img_url : ""}
								/>
								<img
									alt=""
									src="https://img2.epetbar.com/2019-10/17/20/84dd6c38059e8894d07e9b89e6d63f03.jpg?x-oss-process=style/water"
								/>
								<div className="wrap">
									<ul>
										<li>
											<img
												alt=""
												src="https://img1.epetbar.com/common/upload/commonfile/2019/011/14/113322_31270.jpg?x-oss-process=style/fill&$1=200&$2=200"
											/>
=======
								<li>
									<img src="https://img2.epetbar.com/2019-02/21/19/e65e0e63d0cbe9459fdd3e17eea69d08.jpg?x-oss-process=style/water" />
								</li>
								<li>
									<img src="https://img2.epetbar.com/2019-02/21/20/15eaf4903f325fc0b61a6b37e7af2190.jpg?x-oss-process=style/water" />
								</li>
								<li>
									<img src="https://img2.epetbar.com/2019-02/21/20/40eae321dbdc0b2b341d6fb1d1f562ad.jpg?x-oss-process=style/water" />
								</li>
								<li>
									<img src="https://img2.epetbar.com/2019-02/21/20/6fadefe07ee26dd876cc0eb940866cd4.jpg?x-oss-process=style/water" />
								</li>
								<li>
									<img src="https://img2.epetbar.com/2019-07/15/15/7adca87f3f9311d76331de6503c7e3ff.jpg?x-oss-process=style/water" />
								</li>
							</ul>
							<div>
								<img src="https://img2.epetbar.com/2019-10/22/10/e6068061ed5b3eb54032d844ecf88848.jpg?x-oss-process=style/water" />
								<img src="https://img2.epetbar.com/2019-10/17/20/84dd6c38059e8894d07e9b89e6d63f03.jpg?x-oss-process=style/water" />
								<div className="wrap">
									<ul>
										<li>
											<img src="https://img1.epetbar.com/common/upload/commonfile/2019/011/14/113322_31270.jpg?x-oss-process=style/fill&$1=200&$2=200" />
>>>>>>> d209379a66cc39580c15cc73c7f24ac9a61e4422
											<p>￥756.00</p>
											<p>
												<del>￥1118.00</del>
											</p>
										</li>
										<li>
<<<<<<< HEAD
											<img
												alt=""
												src="https://img1.epetbar.com/common/upload/commonfile/2019/011/14/113322_31270.jpg?x-oss-process=style/fill&$1=200&$2=200"
											/>
=======
											<img src="https://img1.epetbar.com/common/upload/commonfile/2019/011/14/113322_31270.jpg?x-oss-process=style/fill&$1=200&$2=200" />
>>>>>>> d209379a66cc39580c15cc73c7f24ac9a61e4422
											<p>￥756.00</p>
											<p>
												<del>￥1118.00</del>
											</p>
										</li>
										<li>
<<<<<<< HEAD
											<img
												alt=""
												src="https://img1.epetbar.com/common/upload/commonfile/2019/011/14/113322_31270.jpg?x-oss-process=style/fill&$1=200&$2=200"
											/>
=======
											<img src="https://img1.epetbar.com/common/upload/commonfile/2019/011/14/113322_31270.jpg?x-oss-process=style/fill&$1=200&$2=200" />
>>>>>>> d209379a66cc39580c15cc73c7f24ac9a61e4422
											<p>￥756.00</p>
											<p>
												<del>￥1118.00</del>
											</p>
										</li>
										<li>
<<<<<<< HEAD
											<img
												alt=""
												src="https://img1.epetbar.com/common/upload/commonfile/2019/011/14/113322_31270.jpg?x-oss-process=style/fill&$1=200&$2=200"
											/>
=======
											<img src="https://img1.epetbar.com/common/upload/commonfile/2019/011/14/113322_31270.jpg?x-oss-process=style/fill&$1=200&$2=200" />
>>>>>>> d209379a66cc39580c15cc73c7f24ac9a61e4422
											<p>￥756.00</p>
											<p>
												<del>￥1118.00</del>
											</p>
										</li>
										<li>
<<<<<<< HEAD
											<img
												alt=""
												src="https://img1.epetbar.com/common/upload/commonfile/2019/011/14/113322_31270.jpg?x-oss-process=style/fill&$1=200&$2=200"
											/>
=======
											<img src="https://img1.epetbar.com/common/upload/commonfile/2019/011/14/113322_31270.jpg?x-oss-process=style/fill&$1=200&$2=200" />
>>>>>>> d209379a66cc39580c15cc73c7f24ac9a61e4422
											<p>￥756.00</p>
											<p>
												<del>￥1118.00</del>
											</p>
										</li>
									</ul>
								</div>
<<<<<<< HEAD
								<img
									alt=""
									src="https://img2.epetbar.com/2019-10/22/09/e7426d74e3892bb80ca507ec23efd675.jpg?x-oss-process=style/water"
								/>
=======
								<img src="https://img2.epetbar.com/2019-10/22/09/e7426d74e3892bb80ca507ec23efd675.jpg?x-oss-process=style/water" />
>>>>>>> d209379a66cc39580c15cc73c7f24ac9a61e4422
							</div>
							<ul></ul>
						</div>
					</div>
				</PetFood>
<<<<<<< HEAD
			</PageContainer>
		);
	}
	componentDidMount() {
		this.props.handlefood();
		this.props.handlelist();
	}
=======
            </PageContainer>
        )
    }
>>>>>>> d209379a66cc39580c15cc73c7f24ac9a61e4422
}

export default DogFood;
