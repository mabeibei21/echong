import React, { Component, Fragment } from "react";
import { Header, HotSearch, Body } from "./styled";
import { withRouter } from "react-router-dom";
import HotImg from "./Shot.png";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore";
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class Search extends Component {
  render() {
    return (
      <Fragment>
        <Body>
          <Header>
            <ul>
              <li className="iconfont" onClick={this.handleBack.bind(this)}>
                &#xe6e4;
              </li>
              <li className="sou">
                <i className="iconfont">&#xe623;</i>
                <input type="text" placeholder="搜索你喜欢的宝贝" />
              </li>
              <li>搜索</li>
            </ul>
          </Header>
          <HotSearch>
            <div className="container">
              <h6>
                <i>
                  <img src={HotImg} />
                </i>
                热门搜索
              </h6>
              <div className="hot">
                <div className="hot1">
                  <span onClick={this.handleToList.bind(this)}>钙胃能</span>
                  <span onClick={this.handleToList.bind(this)}>比熊</span>
                  <span onClick={this.handleToList.bind(this)}>冠能</span>
                  <span onClick={this.handleToList.bind(this)}>雷米高</span>
                  <span onClick={this.handleToList.bind(this)}>麦德琳</span>
                  <span onClick={this.handleToList.bind(this)}>狗厕所</span>
                  <span onClick={this.handleToList.bind(this)}>心丝虫</span>
                  <span onClick={this.handleToList.bind(this)}>狗笼子</span>
                  <span onClick={this.handleToList.bind(this)}>除臭饼干</span>
                  <span>驱虫药</span>
                  <span>生鲜本能</span>
                  <span>洁齿骨</span>
                  <span>螨虫</span>
                  <span>美毛粉</span>
                  <span>狗狗零食</span>
                </div>
              </div>
            </div>
          </HotSearch>
        </Body>
      </Fragment>
    );
  }
  /* componentDidMount() {
    this.props.handleSearchAsyncData();
  } */
  handleBack() {
    this.props.history.goBack();
  }
  handleToList() {
    this.props.history.push("list");
  }
}

export default Search;
