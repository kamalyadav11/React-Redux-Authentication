import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "../styles/HeaderStyles.css";

class Header extends Component {
  renderHeaderLinks = () => {
    if (this.props.authenticated) {
      return (
        <div>
          <Link to="/signout">Sign Out</Link>
          <Link to="/feature">Feature</Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/signup">Sign Up</Link>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="header">
        <Link to="/">Redux Auth</Link>
        {this.renderHeaderLinks()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth.authenticated
});

export default connect(mapStateToProps)(Header);
