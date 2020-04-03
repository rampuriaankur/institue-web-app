import React from "react";
import * as Auth from "../../api/awsAuth";
import { Link } from "react-router-dom";
class Registration extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    errors: {
      username: "",
      email: "",
      password: "",
      confirmpassword: ""
    }
  };

  clearErrorState = () => {
    this.setState({
      errors: {
        cognito: null,
        blankfield: false,
        passwordmatch: false,
        username: null,
        email: null,
        password: null,
        confirmpassword: null
      }
    });
  };

  onInputChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    this.clearErrorState();
    if (!this.validationInput(event)) {
      return;
    }
    let errors = Auth.signup(
      this.state.username,
      this.state.email,
      this.state.password
    );
    debugger;
    if (!errors) {
      this.props.history.push("/");
    } else {
    }
  };

  validationInput = event => {
    const _errors = {};
    if (!event.target.form.elements["username"].value)
      _errors.username = "username is required";
    if (!event.target.form.elements["email"].value)
      _errors.email = "email is required";

    this.setState(prevState => ({
      errors: {
        // object that we want to update
        ...prevState.errors,
        username: _errors.username,
        email: _errors.email
        // keep all other key-value pairs
        //  username: _errors.errors.username // update the value of specific key
      }
    }));
    //  this.state(..._errors);
    return Object.keys(_errors).length === 0;
  };

  render() {
    return (
      <div>
        <section className="section auth">
          <div className="container">
            <form onSubmit={this.handleSubmit}>
              <h1>Register</h1>
              <p className="control has-icons-left" />
              <div className="row">
                <div className="col-sm-3">
                  <label htmlFor="username" className="mr-2">
                    User Name
                  </label>
                </div>
                <div className="col-sm-5">
                  <input
                    id="username"
                    name="username"
                    label="Enter username"
                    placeholder="Enter username"
                    className="form-control"
                    onChange={this.onInputChange}
                    value={this.state.username}
                    error={this.state.errors.username}
                  />
                </div>

                <div className="col-sm-4">
                  {this.state.errors.username && (
                    <div className="alert alert-danger">
                      {this.state.errors.username}
                    </div>
                  )}
                </div>
              </div>
              <p className="control has-icons-left" />
              <div className="row">
                <div className="col-sm-3">
                  <label htmlFor="email" className="mr-2">
                    Email
                  </label>
                </div>
                <div className="col-sm-5">
                  <input
                    type="email"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    value={this.state.email}
                    className="form-control"
                    onChange={this.onInputChange}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                </div>
                <div className="col-sm-3">
                  {this.state.errors.email && (
                    <div className="alert alert-danger">
                      {this.state.errors.email}
                    </div>
                  )}
                </div>{" "}
              </div>
              <p className="control has-icons-left" />

              <div className="row">
                <div className="col-sm-3">
                  <label htmlFor="password" className="mr-2">
                    Password
                  </label>
                </div>
                <div className="col-sm-5">
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    value={this.state.password}
                    className="form-control"
                    onChange={this.onInputChange}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </div>
                <div className="col-sm-3" />
              </div>

              <p className="control has-icons-left" />

              <div className="row">
                <div className="col-sm-3">
                  <label htmlFor="confirmpassword" className="mr-2">
                    Confirm Password
                  </label>
                </div>
                <div className="col-sm-5">
                  <input
                    type="password"
                    className="form-control"
                    id="confirmpassword"
                    placeholder="Confirm password"
                    value={this.state.confirmpassword}
                    onChange={this.onInputChange}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </div>
                <div className="col-sm-3" />
              </div>
              <p className="control has-icons-left" />
              <div className="field">
                <p className="control">
                  <a href="/forgotpassword">Forgot password?</a>
                </p>
              </div>
              <div className="row">
                <p className="control .bd-example">
                  <button
                    className="btn  btn-success"
                    onClick={this.handleSubmit}
                  >
                    Register
                  </button>{" "}
                  <b />
                  <Link className="btn btn-secondary" to={"/"}>
                    Cancel
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default Registration;
