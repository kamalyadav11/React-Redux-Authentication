import { compose } from "redux";
import { connect } from "react-redux";
import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

import { signup } from "../../actions";
import "../../styles/FormErrorStyle.css";

class Signup extends Component {
  renderField = field => {
    const { touched, error } = field.meta;
    const className = `input__title ${
      touched && error ? "red-border__error" : ""
    }`;
    return (
      <div className="flex-containers">
        <input
          {...field.input}
          className={className}
          placeholder={field.placeholder}
        />
        <div className="red-text__error">{touched && error}</div>
      </div>
    );
  };

  onSubmit = formProps => {
    this.props.signup(formProps, () => {
      this.props.history.push("/feature");
    });
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="card">
        <div className="div-text">
          Already Registered?{" "}
          <span className="span-text">
            <Link to="/signin">Sign In</Link>
          </span>
        </div>
        <form onSubmit={handleSubmit(this.onSubmit)} className="container">
          <Field
            name="email"
            type="text"
            component={this.renderField}
            label="Email"
            placeholder="Email"
            autoComplete="none"
          />
          <Field
            name="id"
            type="text"
            component={this.renderField}
            label="ID"
            placeholder="ID"
            autoComplete="none"
          />
          <Field
            name="password"
            type="password"
            component={this.renderField}
            label="Password"
            placeholder="Password"
            autoComplete="none"
          />
          <div>{this.props.errorMessage}</div>
          <button className="submit-button">SIGN UP</button>
        </form>
      </div>
    );
  }
}

const validate = values => {
  const errors = {};

  if (!values.email) errors.email = "Please enter a valid email address";
  if (!values.id) errors.id = "Please enter a valid Id";
  if (!values.password) errors.password = "Please enter your password";

  return errors;
};

const mapStateToProps = state => {
  return { errorMessage: state.auth.errorMessage };
};

//@compose combine all hocs.
export default compose(
  connect(
    mapStateToProps,
    { signup }
  ),
  reduxForm({ validate, form: "signup" })
)(Signup);
