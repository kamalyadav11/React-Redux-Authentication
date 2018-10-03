import React, { Component } from "react";
import RequireAuth from "./RequireAuth";

class Feature extends Component {
  render() {
    return (
      <div>
        This is basically the page shown after user has successfull logged in
      </div>
    );
  }
}

export default RequireAuth(Feature);
