import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

class Navigation extends Component {
  state = {};
  render() {
    return (
      <div className="navbar">
        <ul>
          <li>
            <Link to={ROUTES.SIGN_IN}>Signin</Link>
          </li>
          <li>
            <Link to={ROUTES.SIGN_UP}>SignUp</Link>
          </li>
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
    );
  }
}

export default Navigation;
