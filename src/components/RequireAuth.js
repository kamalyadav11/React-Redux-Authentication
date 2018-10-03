import React, { Component } from "react";
import { connect } from "react-redux";

const RequireAuth = ChildComponent => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.isUserAutherised();
    }

    //@@ componentDidMount is used because when the user in on /post page and lookinh through comments, and presses signOut then it is the case of component Update
    componentDidUpdate() {
      this.isUserAutherised();
    }

    isUserAutherised = () => {
      if (!this.props.auth) {
        this.props.history.push("/");
      }
    };
    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => ({ auth: state.auth.authenticated });

  return connect(mapStateToProps)(ComposedComponent);
};

export default RequireAuth;
