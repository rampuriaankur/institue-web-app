import { Auth } from "aws-amplify";

export async function signup(username, email, password) {
  // AWS Cognito integration here
  let errors = {};
  try {
    const signUpResponse = await Auth.signUp({
      username,
      password,
      attributes: {
        email: email,
      },
    });
    console.log(signUpResponse);
    return;
  } catch (error) {
    let err = null;
    !error.message ? (err = { message: error }) : (err = error);
    errors = {
      cognito: err,
    };
  }
  return errors;
}

export async function login(username, password) {
  let response = {
    errors: "",
    data: "",
  };
  try {
    const signInResponse = await Auth.signIn({
      username,
      password,
    });
    console.log(signInResponse);
    response.data = signInResponse;
  } catch (error) {
    let err = null;
    !error.message ? (err = { message: error }) : (err = error);
    response.errors = {
      cognito: err,
    };
  }
  return response;
}

export async function forgotPassword(email) {
  let response = {
    errors: "",
    data: "",
  };
  try {
    const forgotPasswordResponse = await Auth.forgotPassword(email);
    console.log(forgotPasswordResponse);
    response.data = forgotPasswordResponse;
  } catch (error) {
    let err = null;
    !error.message ? (err = { message: error }) : (err = error);
    response.errors = {
      cognito: err,
    };
  }
  return response;
}

export async function generateNewPassword(
  email,
  verificationCode,
  newPassword
) {
  debugger;
  let response = {
    errors: "",
    data: "",
  };

  try {
    debugger;

    const res = await Auth.forgotPasswordSubmit(
      email,
      verificationCode,
      newPassword
    );
  } catch (error) {
    debugger;

    let err = null;
    !error.message ? (err = { message: error }) : (err = error);
    response.errors = {
      cognito: err,
    };
  }

  return response;
}
