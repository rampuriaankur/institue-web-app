import React, { Component } from "react";

import FormErrors from "../common/FormErrors";
import { Link } from "react-router-dom";
import * as Auth from "../../api/awsAuth";
import Banner from "../Banner";
class Login extends Component {
  state = {
    username: "",
    password: "",
    errors: {
      cognito: "",
      unameError: "",
      passError: "",
    },
  };

  clearErrorState = () => {
    this.setState((prevState) => ({
      errors: {
        ...prevState.errors,
        unameError: "",
        passError: "",
        cognito: "",
      },
    }));
  };

  Validate = (event) => {
    const _errors = {};
    if (!event.target.elements["username"].value)
      _errors.unameError = "username is required";
    if (!event.target.elements["password"].value)
      _errors.passError = "password is required";

    this.setState((prevState) => ({
      errors: {
        ...prevState.errors,
        unameError: _errors.unameError,
        passError: _errors.passError,
      },
    }));

    return Object.keys(_errors).length === 0;
  };

  doLogin = async (username, password) => {
    debugger;
    const signInResponse = await Auth.login(username, password);

    if (signInResponse.errors) {
      this.setState((prevState) => ({
        errors: {
          ...prevState.errors,
          cognito: signInResponse.errors,
        },
      }));
    } else {
      const user = signInResponse.data;
      this.props.auth.setUser(user);
      this.props.auth.setAuthenticated(true);
      this.props.history.push("/");
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.clearErrorState();

    const isFormValidationPass = this.Validate(event, this.state);
    if (isFormValidationPass) {
      this.doLogin(this.state.username, this.state.password);
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
      <section className="section auth center">
        <Banner />
        <div className="container ">
          <form onSubmit={this.handleSubmit}>
            <h1>Log in</h1>
            <p className="control has-icons-left" />
            <p className="control has-icons-left" />
            <div className="row">
              <div className="col-sm-5">
                <FormErrors formerrors={this.state.errors.cognito} />
              </div>
            </div>
            <p className="control has-icons-left" />
            <p className="control has-icons-left" />
            <div className="row">
              <div className="col-sm-2">
                <label htmlFor="username" className="mr-2">
                  User Name
                </label>
              </div>

              <div className="com-sm-5">
                <input
                  type="text"
                  id="username"
                  className="form-control"
                  aria-describedby="usernameHelp"
                  placeholder="Enter username or email"
                  value={this.state.username}
                  onChange={this.onInputChange}
                />
              </div>

              <div className="col-sm-5">
                {this.state.errors.unameError && (
                  <span className=" container alert-danger is-danger">
                    <strong> {this.state.errors.unameError}</strong>
                  </span>
                )}
              </div>
            </div>
            <p className="control has-icons-left" />
            <div className="row">
              <div className="col-sm-2">
                <label htmlFor="password" className="mr-2">
                  Password
                </label>
              </div>

              <div className="com-sm-5">
                <input
                  className="form-control"
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onInputChange}
                />
              </div>

              <div className="col-sm-5">
                {this.state.errors.passError && (
                  <span className=" container alert-danger is-danger">
                    <strong> {this.state.errors.passError}</strong>
                  </span>
                )}
              </div>
            </div>

            <div className="row">
              <div className="col-sm-2">
                <a href="/forgotpassword">Forgot password?</a>
              </div>
            </div>
            <p className="control has-icons-left" />
            <div className="row">
              <div className="col-sm-2">
                <button className="btn  btn-success">Login</button>
                <b /> <b /> <b />
                <Link className="btn btn-secondary" to={"/"}>
                  Cancel
                </Link>
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default Login;
