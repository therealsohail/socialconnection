import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import logo from "../../Assets/images/logo.png";
class Navigation extends Component {
  state = {};
  render() {
    return (
      <div className="navbar">
        <div className="nav-left">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav-middle">
          <ul>
            <li>
              <Link to={ROUTES.HOME}>Home</Link>
            </li>
            <li>
              <Link to={ROUTES.ACCOUNT}>Account</Link>
            </li>
            <li>
              <Link to={ROUTES.ADMIN}>Admin</Link>
            </li>
          </ul>
        </div>
        <div className="nav-right">
          <ul>
            <li>
              <Link to={ROUTES.SIGN_IN}>Signin</Link>
            </li>
            <li>
              <Link to={ROUTES.SIGN_UP}>SignUp</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navigation;
