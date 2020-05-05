import React from "react";

function FormErrors(props) {
  if (props.formerrors.cognito) {
    debugger;
    return (
      <div className="error container help is-danger">
        <div className="row justify-content-center">
          <strong>
            <p class="text-danger">
              {" "}
              Cognito Error : {props.formerrors.cognito.message}{" "}
            </p>{" "}
          </strong>
        </div>
      </div>
    );
  } else {
    return <div />;
  }
}

export default FormErrors;
