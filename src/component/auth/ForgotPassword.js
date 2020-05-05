import React, { useState } from "react";
import * as Auth from "../../api/awsAuth";
import FormErrors from "../common/FormErrors";

function ForgotPassword(props) {
  const [email, setEmail] = useState();
  const [errors, setError] = useState({
    emailError: "",
    cognito: "",
  });

  const clearErrorState = () => {
    setError((prevState) => ({
      errors: {
        ...prevState.errors,
        emailError: "",
        cognito: "",
      },
    }));
  };

  const validationInput = (event) => {
    if (!event.target.elements["email"].value) {
      setError((prevState) => ({
        ...prevState,
        emailError: "email is required",
      }));
    }
    return errors.emailError.length === 0;
  };

  const doFogotPassword = async (email) => {
    const response = await Auth.forgotPassword(email);

    if (response.errors) {
      setError((prevState) => ({
        errors: {
          ...prevState.errors,
          cognito: response.errors,
        },
      }));
    } else {
      props.history.push("/VerifyForgotPassword");
    }
  };

  function forgotPasswordHandler(event) {
    event.preventDefault();
    clearErrorState();
    if (validationInput(event)) {
      doFogotPassword(email);
    }
  }

  function onInputChange(event) {
    setEmail(event.target.value);

    document.getElementById(event.target.id).classList.remove("is-danger");
  }

  return (
    <div>
      <section className="section auth">
        <div className="container">
          <h1>Forgot your password?</h1>
          <p>
            Please enter the email address associated with your account and
            we'll email you a password reset link.
          </p>
          <FormErrors formerrors={errors} />
          <p className="control has-icons-left has-icons-right" />
          <form onSubmit={forgotPasswordHandler}>
            <div className="row">
              <div className="col-sm-6 col-md-6">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={email}
                  onChange={onInputChange}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </div>
              <div className="col-sm-5 col-md-6">
                {errors.emailError && (
                  <span className="container alert-danger is-danger">
                    <strong> {errors.emailError} aaaa</strong>
                  </span>
                )}
              </div>
            </div>
            <p className="control has-icons-left has-icons-right" />
            <div className="field">
              <p className="control">
                <button className="btn btn-success">Submit</button>
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
export default ForgotPassword;
