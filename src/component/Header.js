import React from "react";
import { NavLink } from "react-router-dom";
import { Auth } from "aws-amplify";

function HeaderPage(props) {
  const activeStyle = { color: "orange" };

  const auth = { ...props.auth };

  const handleLogOut = async event => {
    event.preventDefault();
    try {
      Auth.signOut();
      auth.setAuthenticated(false);
      auth.setUser(null);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div>{console.log(auth)}</div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink
              className="nav-item navbar-brand"
              to="/"
              activeStyle={activeStyle}
              exact
            >
              <span>Home</span>
            </NavLink>
          </li>
          <li className="nav-item navbar-brand">
            <NavLink to="/courses" activeStyle={activeStyle}>
              <span>Courses</span>
            </NavLink>
          </li>
          <li className="nav-item navbar-brand">
            <NavLink to="/about" activeStyle={activeStyle}>
              <span>About</span>
            </NavLink>
          </li>
        </ul>
        <ul className="navbar-nav">
          {auth.isAuthenticated && auth.user && (
            <div>
              <li className="nav-item navbar-brand">
                <p>
                  Hello <strong>{auth.user.username} </strong>
                </p>
              </li>
              <li className="nav-item navbar-brand">
                <NavLink
                  to="/"
                  onClick={handleLogOut}
                  activeStyle={activeStyle}
                >
                  <span>Logout</span>
                </NavLink>
              </li>
            </div>
          )}

          {!auth.isAuthenticated && (
            <div>
              <li className="nav-item navbar-brand">
                <NavLink to="/Login" activeStyle={activeStyle}>
                  <span>Login</span>
                </NavLink>
              </li>
              <li className="nav-item navbar-brand">
                <NavLink to="/Registration" activeStyle={activeStyle}>
                  <span>Sign Up</span>
                </NavLink>
              </li>
            </div>
          )}
        </ul>
      </nav>
    </>
  );
}

export default HeaderPage;
