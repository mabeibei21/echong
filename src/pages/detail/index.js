import React, { Component } from "react";
import Header from "../../components/header/index";
import { PageContainer } from "../../common/styled";
import { Top, Mation, Estimate, Buttono, Section } from "./styled";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore";
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gid: "",
      img: "",
    };
    let { gid } = this.props.match.params;
    this.state.gid = gid;
  }
  render() {
    // console.log(this.props.img,456)
    return (
      <PageContainer>
        <Header title="商品 详情 评价" />
        <Section>
          <Top>
            <div className="banner">
              <div>
                <img src={this.props.img} alt="" />
              </div>
            </div>
            <div className="title">
              <span>{this.props.subject}</span>
            </div>
            <div className="free">
              <span>{this.props.presubject}</span>
            </div>
            <div className="price">
              <b>{this.props.sale_price}</b>
              <del className="JX" id="detailsJXJ_jxj">
                <span>
                  <s>{this.props.market_price}</s>
                </span>
              </del>
              <div>
                <img
                  alt=""
                  src="https://static.epetbar.com/static_wap/appmall/lib/goods/quality_assurance.png"
                />
              </div>
            </div>

            <div className="bg"></div>
          </Top>
          <Mation>
            <div className="a2">
              <span>已选:</span>
              <em>'鱼皮小丁'</em>
            </div>
            <div className="bg"></div>
            <div className="a5">
              <div>
                <span>送至</span>
                <span>:</span>
                <span>北京</span>
                <span>东城区</span>
              </div>
              <b>
                <i className="iconfont">&#xe50a;</i>
              </b>
            </div>
            <div className="a6">
              <span>
                <img
                  alt="#"
                  src="https://static.epetbar.com/static_wap/appmall/lib/goods/qualityassurance.png"
                />
                <span>正品保证</span>
              </span>
              <span>
                <img
                  alt="#"
                  src="https://static.epetbar.com/static_wap/appmall/lib/goods/freeshipping.png"
                />
                <span>99元包邮</span>
              </span>
              <span>
                <img
                  alt="#"
                  src="https://static.epetbar.com/static_wap/appmall/lib/goods/thirtydays.png"
                />
                <span>30天退货</span>
              </span>
            </div>
            <div className="bg"></div>
          </Mation>
          <Estimate>
            <div className="foot">
              <div className="ps2">
                <div className="ps21">
                  <div>
                    <img
                      alt="#"
                      src="https://img2.epetbar.com/brand/brandLogo/purchase_suppliers_file_1536288944.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <p>麦富迪Myfoodie</p>
                    <p>让宠爱更专业</p>
                  </div>
                  <div>
                    <p>+关注</p>
                  </div>
                </div>
                <div className="ps22">
                  <ul>
                    <li>
                      <p>545</p>
                      <p>宠爱更专</p>
                    </li>
                    <li>
                      <p>456</p>
                      <p>宠爱更专</p>
                    </li>
                    <li>
                      <p>2</p>
                      <p>宠爱更专</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="btn">
                <span type="button" value="查看商品" />
                <span type="button" value="进入品牌馆" />
              </div>
            </div>
          </Estimate>
        </Section>
        <Buttono>
          <div className="details-bottom">
            <a onClick={this.handleCollect.bind(this)}>
              <b></b>
              <span>收藏</span>
            </a>
            <a href="#">
              <b>
                <span className="num">0</span>
              </b>
              <span>购物车</span>
            </a>
            <a onClick={this.handleAddCart.bind(this)}>加入购物车</a>
          </div>
        </Buttono>
      </PageContainer>
    );
  }
  componentWillMount() {}
  componentDidMount() {
    if (!this.state.gid) {
      this.state.gid = 100209;
    }
    this.props.handleDetailData(this.state.gid);
  }
  handleAddCart() {
    
    let goods = [];
    let obj = {
      price: "",
      title: "",
      img: "",
      id:'',
      num:1,
    };
    obj.price = this.props.sale_price;
    obj.img = this.props.img;
    obj.title = this.props.subject;
    obj.id=this.state.gid;
    let fl = false;
     if(localStorage.getItem("cart")){
      goods =JSON.parse( localStorage.getItem("cart"))
      goods.map(item => {
        if (item.id ==this.state.gid) {
          item.num++; 
          fl = true;
          return;
        }
      });
      if(fl ==false){
        goods.push(obj);
      }
    }else{
      goods = []
      goods.push(obj);
    };

    localStorage.setItem("cart", JSON.stringify(goods));
    this.props.history.push("/cart");
  }
  handleCollect(){
    let collect=[];
    let list={
      price: "",
      title: "",
      img: "",
      id:'',
      time:new Date().getTime(),
    };
    list.price = this.props.sale_price;
    list.img = this.props.img;
    list.title = this.props.subject;
    list.id=this.state.gid;
    let col=false;
    if(localStorage.getItem("collect")){
      collect =JSON.parse( localStorage.getItem("collect"))
      collect.map(item => {
        if (item.id ==this.state.gid) {
          col = true;
          return;
        }
      });
      if(col ==false){
        collect.push(list);
      }
    }else{
      collect = []
      collect.push(list);
    };
    // collect.push(list);
    localStorage.setItem("collect", JSON.stringify(collect));
    this.props.history.push("/collection");
  }
}

export default Detail;
