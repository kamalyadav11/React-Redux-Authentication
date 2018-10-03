import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import Welcome from "../components/Welcome";
import Signup from "../components/auth/Signup";
import Feature from "../components/Feature";
import Signout from "../components/auth/Signout";
import Signin from "../components/auth/Signin";
import "./styles.css";

export default class AppRouter extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/" component={Welcome} exact />
              <Route path="/signup" component={Signup} />
              <Route path="/feature" component={Feature} />
              <Route path="/signout" component={Signout} />
              <Route path="/signin" component={Signin} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
