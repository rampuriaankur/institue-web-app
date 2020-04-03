//import { Auth } from "aws-amplipfy";
import { Auth } from "aws-amplify";
//import { Auth } from "aws-amplify";

export async function signup(username, email, password) {
  // AWS Cognito integration here
  debugger;
  let errors = {};
  try {
    const signUpResponse = await Auth.signUp({
      username,
      password,
      attributes: {
        email: email
      }
    });
    debugger;
    console.log(signUpResponse);
    return;
    // this.props.history.push("/welcome");
  } catch (error) {
    let err = null;
    !error.message ? (err = { message: error }) : (err = error);
    errors = {
      cognito: err
    };
  }
  return errors;
}
