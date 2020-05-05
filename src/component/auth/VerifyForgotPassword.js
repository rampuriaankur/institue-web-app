import React, { useState } from "react";
import FormErrors from "../common/FormErrors";
import * as Auth from "../../api/awsAuth";

class VerifyForgotPassword extends React.Component {
  state = {
    verificationcode: "",
    email: "",
    newpassword: "",
    errors: {
      cognito: "",
      codeError: "",
      emailError: "",
      passError: "",
    },
  };

  clearErrorState = () => {
    this.setState({
      errors: {
        cognito: "",
        codeError: "",
        emailError: "",
        passError: "",
      },
    });
  };

  validate = (event) => {
    const _errors = {};
    if (!event.target.elements["verificationcode"].value)
      _errors.codeError = "Verification code is required";

    if (!event.target.elements["email"].value)
      _errors.emailError = "Email is required";
    const newPassword = event.target.elements["newpassword"].value;
    if (!newPassword.length > 0 || newPassword.length <= 6)
      _errors.passError = "Password is required with minimum lenght of 6";

    this.setState((prevState) => ({
      errors: {
        ...prevState.errors,
        codeError: _errors.codeError,
        passError: _errors.passError,
        emailError: _errors.emailError,
      },
    }));

    return Object.keys(_errors).length === 0;
  };

  generateNewPassword = async () => {
    const response = await Auth.generateNewPassword(
      this.state.email,
      this.state.verificationcode,
      this.state.newpassword
    );

    if (response.errors) {
      this.setState((prevState) => ({
        errors: {
          ...prevState.errors,
          cognito: response.errors,
        },
      }));
    } else {
      const data = response.data;
      console.log("New password Generated sucessfully!!!");
      this.props.history.push("/changepasswordconfirmation");
    }
  };

  passwordVerificationHandler = async (event) => {
    event.preventDefault();
    // Form validation
    this.clearErrorState();
    const isFormValid = this.validate(event, this.state);
    if (isFormValid) {
      this.generateNewPassword();
    }
  };

  onInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
    document.getElementById(event.target.id).classList.remove("is-danger");
  };

  render() {
    return (
      <section className="section auth">
        <div className="container">
          <h1>Set new password</h1>
          <p>
            Please enter the verification code sent to your email address below,
            your email address and a new password.
          </p>
          <div className="row">
            <div className="col-sm-5">
              <FormErrors formerrors={this.state.errors.cognito} />
            </div>
          </div>

          <form onSubmit={this.passwordVerificationHandler}>
            <p className="control has-icons-left" />
            <div className="row">
              <div className="col-sm-2">
                <label htmlFor="verificationcode" className="mr-2">
                  Verification Code
                </label>
              </div>

              <div className="com-sm-5">
                <input
                  type="text"
                  className="input"
                  id="verificationcode"
                  aria-describedby="verificationCodeHelp"
                  placeholder="Enter verification code"
                  value={this.state.verificationcode}
                  onChange={this.onInputChange}
                />
              </div>
              <div className="col-sm-5">
                {this.state.errors.codeError && (
                  <span className=" container alert-danger is-danger">
                    <strong> {this.state.errors.codeError}</strong>
                  </span>
                )}
              </div>
            </div>
            <p className="control has-icons-left" />
            <div className="row">
              <div className="col-sm-2">
                <label htmlFor="email" className="mr-2">
                  Email
                </label>
              </div>
              <div className="com-sm-5">
                <input
                  className="input"
                  type="email"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onInputChange}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </div>

              <div className="col-sm-5">
                {this.state.errors.emailError && (
                  <span className=" container alert-danger is-danger">
                    <strong> {this.state.errors.emailError}</strong>
                  </span>
                )}
              </div>
            </div>
            <p className="control has-icons-left" />

            <div className="row">
              <div className="col-sm-2">
                <label htmlFor="newpassword" className="mr-2">
                  New Password
                </label>
              </div>
              <div className="com-sm-5">
                <input
                  type="password"
                  className="input"
                  id="newpassword"
                  placeholder="New password"
                  value={this.state.newpassword}
                  onChange={this.onInputChange}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </div>
              <div className="col-sm-5">
                {this.state.errors.passError && (
                  <span className=" container alert-danger is-danger">
                    <strong> {this.state.errors.passError}</strong>
                  </span>
                )}
              </div>
            </div>
            <p className="control has-icons-left" />
            <div className="com-sm-5">
              <p className="control">
                <button className="btn btn-success">Submit</button>
              </p>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default VerifyForgotPassword;
