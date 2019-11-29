import React, { Component } from 'react'
import {HashRouter as Router,Switch,Redirect} from "react-router-dom";
import routeEach from "./utils";
import {RouteConfig} from "router";
export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Redirect from="/" to="/home" exact/>
          {routeEach(RouteConfig)}
        </Switch>
      </Router>
    )
  }
}
