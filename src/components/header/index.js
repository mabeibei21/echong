import React, { Component,Fragment } from 'react'
import {HeaderContainer,Search} from "./styled";
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";
@withRouter
class Header extends Component {
    constructor(){
        super();
        this.state={
            flag:false
        }
    }
    render() {
        let {flag}=this.state;
        return (
            <Fragment>
            <HeaderContainer>
                <div className="header_l">
                    <i className="iconfont" onClick={this.handleBackTo.bind(this)}>&#xe6e4;</i>
                </div>
                <div className="header_c">{this.props.title}</div>
                <div className="header_r">
                    <p>
                <span style={{display:this.props.flag?'block':'none'}}>编辑</span></p>
                <i onClick={this.handleClick.bind(this)} className="iconfont">&#xe9b2;</i>
                </div>
            </HeaderContainer>
            {/* 点击出现 相当于messagebox */}
            <Search style={{display:flag?'block':'none'}}>
                <ul>
                    <li>
                        <i className="iconfont">&#xe60d;</i>
                        <span>首页</span>
                    </li>
                    <li>
                        <i className="iconfont">&#xe693;</i>
                        <span>商品分类</span>
                    </li>

                    <li>
                        <i className="iconfont">&#xe614;</i>
                        <span>购物车</span>
                    </li>
                    <li>
                        <i className="iconfont">&#xe638;</i>
                        <span>我的e宠</span>
                    </li>
                </ul>
            </Search>
            </Fragment>
        )
    }
    handleClick(){
        this.setState({
            flag:!this.state.flag
        })
    }
    handleBackTo(){
        this.props.history.goBack();
    }
}

Header.defaultProps={
    title:"分类",
    flag:false
}

Header.propTypes={
    title:PropTypes.string,
    flag:PropTypes.bool
}

export default Header;