import { compose } from "redux";
import { connect } from "react-redux";
import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

import { signin } from "../../actions";
import "../../styles/FormErrorStyle.css";

class Signin extends Component {
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
    this.props.signin(formProps, () => {
      this.props.history.push("/feature");
    });
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="card">
        <form onSubmit={handleSubmit(this.onSubmit)} className="container">
          <Field
            name="email"
            type="text"
            component={this.renderField}
            label="Email"
            placeholder="E-mail"
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
          <button className="submit-button">SIGN IN</button>
        </form>
      </div>
    );
  }
}

const validate = values => {
  const errors = {};

  if (!values.email) errors.email = "please enter a valid email address";
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
    { signin }
  ),
  reduxForm({ validate, form: "signin" })
)(Signin);
