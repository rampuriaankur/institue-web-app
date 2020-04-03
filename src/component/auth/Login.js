import React, { Component } from "react";
import { Auth } from "aws-amplify";
import FormErrors from "../common/FormErrors";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    username: "",
    password: "",
    errors: {
      cognito: null,
      blankfield: false
    }
  };

  clearErrorState = () => {
    this.setState({
      errors: {
        cognito: null,
        blankfield: false
      }
    });
  };

  Validate = event => {
    const _errors = {};
    if (!event.target.elements["username"].value)
      _errors.username = "username is required";
    if (!event.target.elements["password"].value)
      _errors.password = "password is required";

    this.setState(prevState => ({
      errors: {
        // object that we want to update
        ...prevState.errors,
        username: _errors.username,
        password: _errors.password
        // keep all other key-value pairs
        //  username: _errors.errors.username // update the value of specific key
      }
    }));
    //  this.state(..._errors);
    return Object.keys(_errors).length === 0;
  };

  handleSubmit = async event => {
    debugger;
    event.preventDefault();

    // Form validation
    this.clearErrorState();
    const error = this.Validate(event, this.state);
    if (error) {
      this.setState({
        errors: { ...this.state.errors, ...error }
      });
    }
    /*
    // AWS Cognito integration here
    try {
      const user = await Auth.signIn(this.state.username, this.state.password);
      console.log(user);
      this.props.auth.setAuthStatus(true);
      this.props.auth.setUser(user);
      this.props.history.push("/");
    } catch (error) {
      let err = null;
      !error.message ? (err = { message: error }) : (err = error);
      this.setState({
        errors: {
          ...this.state.errors,
          cognito: err
        }
      });

    }
  */
  };

  onInputChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    document.getElementById(event.target.id).classList.remove("is-danger");
  };

  render() {
    return (
      <section className="section auth">
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <h1>Log in</h1>
            <p className="control has-icons-left" />
            <p className="control has-icons-left" />

            <FormErrors formerrors={this.state.errors} />

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
                {this.state.errors.username && (
                  <div className="alert alert-danger">
                    {this.state.errors.username}
                  </div>
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
                />{" "}
              </div>

              <div className="col-sm-5">
                {this.state.errors.password && (
                  <div className="alert alert-danger">
                    {this.state.errors.password}
                  </div>
                )}
              </div>
            </div>

            <div className="row">
              <a href="/forgotpassword">Forgot password?</a>
            </div>
            <p className="control has-icons-left" />
            <div className="row">
              <button className="btn  btn-success">Login</button>
              <b />
              <Link className="btn btn-secondary" to={"/"}>
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default Login;
