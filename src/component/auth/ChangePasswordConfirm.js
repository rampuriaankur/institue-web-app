import React, { Component } from "react";
import { Link } from "react-router-dom";

function ChangePasswordConfirmation() {
  return (
    <section className="section auth">
      <div className="container">
        <h1>Change Password</h1>
        <p>Your password has been successfully updated!</p>
        <br />
        <p>
          <strong>
            <Link to="/Login">Click me </Link>for Login Page
          </strong>
        </p>
      </div>
    </section>
  );
}

export default ChangePasswordConfirmation;
