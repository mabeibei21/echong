import React, { Component } from 'react'
import {TabBarContainer} from "./styled";
import {TabBarRoute} from "../../router";
import {withRouter} from "react-router-dom";

 class TabBar extends Component {
    render() {
        return (
            <TabBarContainer>
                <ul>
                    {
                        TabBarRoute.map(item=>(
                            <li key={item.path} onClick={this.handleTo.bind(this,item.path)}>
                                <i className="iconfont">{item.icon}</i><span>{item.text}</span>
                            </li>
                        ))
                    }
                </ul>
            </TabBarContainer>
        )
    }
    handleTo(path){
        this.props.history.push(path)
    }
}
export default withRouter(TabBar);