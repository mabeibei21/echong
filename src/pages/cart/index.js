import React, { Component } from "react";
import { PageContainer } from "../../common/styled";
import Header from "../../components/header/index";
import { CartList, Bottom, Body } from "./styled";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore";
import { withRouter } from "react-router-dom";
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cart: JSON.parse(localStorage.getItem("cart")),
      checked: true,
      Sprice: 0,
      Snum: 0
    };
    if (this.state.cart) {
      this.state.cart.forEach(item => {
        item.flag = true;
      });
    }
  }
  render() {
    let { cart, checked, Snum, Sprice } = this.state;
    return (
      <PageContainer>
        <Header title="购物车" flag />
        <Body>
          <CartList>
            <h6>
              <i>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={this.handleAllCheck.bind(this, checked)}
                />
              </i>
              E宠西部中央仓
            </h6>
            {cart.map((item, index) => (
              <div className="carta" key={item.id}>
                <div className="left">
                  <input
                    type="checkbox"
                    checked={item.flag}
                    onChange={this.handleOneCheck.bind(this, index)}
                  />
                </div>
                <div className="cartc">
                  <img src={item.img} />
                </div>
                <div className="cartr">
                  <h6>
                    <span>[订单赠品]</span>
                    <i>{item.title}</i>
                  </h6>
                  <p>
                    <i>￥{item.price}</i>
                    <strong>
                      <b onClick={this.handleReduce.bind(this,index)}>-</b>
                      <em>
                        <input
                          type="text"
                          value={item.num}
                          onChange={this.handleChange.bind(this, index)}
                        />
                      </em>
                      <a onClick={this.handleAdd.bind(this,index)}>+</a>
                    </strong><button onClick={this.handleDelete.bind(this,index)}>删除</button>
                  </p>
                </div>
              </div>
            ))}
          </CartList>
          {/* 底部中间额 */}
          <Bottom>
            <p>
              <i className="iconfont">&#xe65b;</i>
              总额：<span>￥{Sprice}</span>
            </p>
            <h6>
              去结算<span>{Snum}</span>
            </h6>
          </Bottom>
        </Body>
      </PageContainer>
    );
  }
  handleDelete(index){
      this.state.cart.splice(index,1);
    //   console.log()
      localStorage.setItem("cart",JSON.stringify(this.state.cart));
      this.forceUpdate();
      this.handleSprice();
  }
  handleAdd(index){
      this.state.cart[index].num++;
      localStorage.setItem("cart",JSON.stringify(this.state.cart));
      this.forceUpdate();
      this.handleSprice();
  }
  handleReduce(index){
      if(Number(this.state.cart[index].num)>1){
          this.state.cart[index].num--;
          localStorage.setItem("cart",JSON.stringify(this.state.cart));
          this.forceUpdate();
          this.handleSprice();
      }
  }
  handleAllCheck(checked) {
    if (this.state.cart) {
      this.setState(
        {
          checked: !checked
        },
        () => {
          this.state.cart.forEach(item => {
            item.flag = this.state.checked;
          });
          this.forceUpdate();
          this.handleSprice();
        }
      );
    }
  }
  handleOneCheck(index) {
    if (this.state.cart) {
      this.state.cart[index].flag = !this.state.cart[index].flag;
      let mark =true;
      for(var i=0;i<this.state.cart.length;i++){
          if(!this.state.cart[i].flag){
              mark=false;
          }
      }
      this.state.checked=mark;
      this.forceUpdate();
      this.handleSprice();
    }
  }
  handleChange(index) {}
  handleSprice() {
    if (this.state.cart) {
      let sprice = 0;
      let snum = 0;
      for (var i = 0; i < this.state.cart.length; i++) {
        if (this.state.cart[i].flag) {
          sprice += ((this.state.cart[i].price * 10 )* this.state.cart[i].num);
          snum += this.state.cart[i].num;
        }
      }
      this.setState(
        {
          Sprice: sprice / 10
        },
        () => {}
      );
      this.setState({
        Snum: snum
      });
      this.forceUpdate();
    }
  }
  componentDidMount() {
      this.handleSprice();
  }
}
export default Cart;
