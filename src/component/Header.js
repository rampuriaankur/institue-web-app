import React from "react";
import { NavLink } from "react-router-dom";
function HeaderPage() {
  const activeStyle = { color: "orange" };
  return (
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
        <li className="nav-item navbar-brand">
          <NavLink to="/Registration" activeStyle={activeStyle}>
            <span>Sign Up</span>
          </NavLink>
        </li>
        <li className="nav-item navbar-brand">
          <NavLink to="/Login" activeStyle={activeStyle}>
            <span>Login</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderPage;
