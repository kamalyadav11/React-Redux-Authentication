import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class LoginForm extends Component {
  renderField = field => {
    const { touched, error } = field.meta;
    return (
      <div>
        <label>{field.label}</label>
        <input {...field.input} />
        <div>{touched && error}</div>
      </div>
    );
  };

  onSubmit = () => {
    console.log("Form Submitted");
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field
            name="email"
            type="text"
            component={this.renderField}
            label="Email"
          />
          <Field
            name="password"
            type="text"
            component={this.renderField}
            label="Password"
          />
          <button type="submit">Submit</button>
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

export default reduxForm({ validate, form: "LoginForm" })(LoginForm);
