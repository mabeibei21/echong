import React, { Component } from "react";
import Header from "../../components/header/index";
<<<<<<< HEAD
<<<<<<< HEAD
import {PageContainer} from "../../common/styled";
import {SearchBox,Nav,Default,GoodsList,Body,Screen} from "./styled";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {mapStateToProps,mapDispatchToProps} from "./mapStore";
@connect(mapStateToProps,mapDispatchToProps)
=======
import {Link} from "react-router-dom";
import { PageContainer } from "../../common/styled";
import { SearchBox, Nav, Default, GoodsList, Body, Screen } from "./styled";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore";
@connect(mapStateToProps, mapDispatchToProps)
>>>>>>> Beibei
@withRouter
// @connect()
class List extends Component {
  constructor() {
    super();
    this.state = {
      disapper: false,
      flag: 0,
      color: 0,
      screen: false
    };
  }
  render() {
    let { disapper, flag, color, screen } = this.state;
    let { list, sort_rank, defaultList } = this.props;
    // console.log(list,9999)
    return (
      <PageContainer>
        <Header title="商品列表" />
        <Body>
          <div className="container">
            {/* 搜索 */}
            <SearchBox>
              <div className="input">
                <i className="iconfont">&#xe623;</i>
                <span>钙胃能</span>
              </div>
            </SearchBox>

            {/* 导航条 有排序 */}
            <Nav>
              <ul>
                {sort_rank.map((item, index) => (
                  <li
                    key={index}
                    onClick={this.props.handledefault.bind(this, index)}
                    className={flag == index ? "active" : ""}
                  >
                    {item.title}
                    <i className="iconfont">&#xe61d;</i>
                  </li>
                ))}

                <li onClick={this.props.handleScreen.bind(this)}>
                  筛选<i className="iconfont">&#xe61d;</i>
                </li>
              </ul>
            </Nav>
            {/* 点击筛选的时候 出现的信息 */}
            <Screen style={{ display: screen ? "block" : "none" }}>
              <div className="oneone" onClick={this.props.handleAll.bind(this)}>
                <span>全部</span>
                <i className="iconfont">&#xe65b;</i>
              </div>
            </Screen>
            {/* 点击默认出现的信息 */}
            <Default style={{ display: disapper ? "block" : "none" }}>
              {defaultList.map((item, index) => (
                <div
                  className="one"
                  key={index}
                  onClick={this.props.handlepopular.bind(this, index)}
                >
                  <span className={color == index ? "dui" : ""}>
                    {item.item}
                  </span>
                  <i className="iconfont">&#xe65b;</i>
                </div>
              ))}
            </Default>
            {/* 商品列表 */}
            <GoodsList>
              {list.map((item, index) => (
               <Link key={item.gid} to={"/detail/"+item.gid}>
                  <div /* onClick={this.props.handleDetailTo.bind(this,item.gid)} */ className="zhong">
                    <div className="left">
                      <img src={item.photo} />
                    </div>
                    <div className="right">
                      <h6>{item.subject}</h6>
                      <h5>￥{item.sale_price}</h5>
                      <p>
                        <span>{item.comments}</span>
                        <strong>{item.sold}</strong>
                        <i className="iconfont">&#xe614;</i>
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </GoodsList>
<<<<<<< HEAD
            </div>
                </Body>
            </PageContainer>
        )
    }
    componentDidMount(){
        this.props.handleListAsyncData();
    }
    
=======
import { PageContainer } from "../../common/styled";
import { SearchBox, Nav, Default, GoodsList, Body } from "./styled";
import { withRouter } from "react-router-dom";
// import { connect } from "react-redux";
@withRouter
// @connect()
class List extends Component {
	constructor() {
		super();
		this.state = {
			disapper: false
		};
	}
	render() {
		let { disapper } = this.state;
		return (
			<PageContainer>
				<Header title="商品列表" />
				<Body>
					<div className="container">
						{/* 搜索 */}
						<SearchBox>
							<div className="input">
								<i className="iconfont">&#xe623;</i>
								<span>钙胃能</span>
							</div>
						</SearchBox>

						{/* 导航条 有排序 */}
						<Nav>
							<ul>
								<li onClick={this.handledefault.bind(this)}>
									默认<i className="iconfont">&#xe61d;</i>
								</li>
								<li>销量</li>
								<li>价格</li>
								<li>
									筛选<i className="iconfont">&#xe61d;</i>
								</li>
							</ul>
						</Nav>
						{/* 点击默认出现的信息 */}
						<Default style={{ display: disapper ? "block" : "none" }}>
							<div className="one">
								<span>默认排序</span>
								<i className="iconfont">&#xe65b;</i>
							</div>
							<div className="one">
								<span>按人气</span>
								<i className="iconfont">&#xe65b;</i>
							</div>
							<div className="one">
								<span>最新上架</span>
								<i className="iconfont">&#xe65b;</i>
							</div>
							<div className="one">
								<span>按销量</span>
								<i className="iconfont">&#xe65b;</i>
							</div>
						</Default>
						{/* 商品列表 */}
						<GoodsList>
							<div onClick={this.handleDetailTo.bind(this)} className="zhong">
								<div className="left">
									<img src="https://img2.epetbar.com/common/upload/commonfile/2019/011/12/165143_275299.jpg@!300w-b" />
								</div>
								<div className="right">
									<h6>中国台湾发育宝 小中型犬用钙胃能散 5g*20袋</h6>
									<h5>￥120.00</h5>
									<p>
										<span>互动:(98%好评)</span>
										<strong>售出:2.74w</strong>
										<i className="iconfont">&#xe614;</i>
									</p>
								</div>
							</div>
							<div className="zhong">
								<div className="left">
									<img src="https://img2.epetbar.com/common/upload/commonfile/2019/011/12/165143_275299.jpg@!300w-b" />
								</div>
								<div className="right">
									<h6>中国台湾发育宝 小中型犬用钙胃能散 5g*20袋</h6>
									<h5>￥120.00</h5>
									<p>
										<span>互动:(98%好评)</span>
										<strong>售出:2.74w</strong>
										<i className="iconfont">&#xe614;</i>
									</p>
								</div>
							</div>
							<div className="zhong">
								<div className="left">
									<img src="https://img2.epetbar.com/common/upload/commonfile/2019/011/12/165143_275299.jpg@!300w-b" />
								</div>
								<div className="right">
									<h6>中国台湾发育宝 小中型犬用钙胃能散 5g*20袋</h6>
									<h5>￥120.00</h5>
									<p>
										<span>互动:(98%好评)</span>
										<strong>售出:2.74w</strong>
										<i className="iconfont">&#xe614;</i>
									</p>
								</div>
							</div>
						</GoodsList>
					</div>
				</Body>
			</PageContainer>
		);
	}
	handledefault() {
		this.setState({
			disapper: !this.state.disapper
		});
	}
	handleDetailTo() {
		this.props.history.push("detail");
	}
>>>>>>> 9e469049d28561ceeed962af870a71731c4d6a4b
=======
          </div>
        </Body>
      </PageContainer>
    );
  }
  componentDidMount() {
    this.props.handleListAsyncData();
  }
>>>>>>> Beibei
}

export default List;
