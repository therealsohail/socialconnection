import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import logo from "../../Assets/images/logo.png";
import { Home, NotificationsActive, Email, Search } from "@material-ui/icons";
import profilePic from "../../Assets/images/profile_pic.jpg";

class Navigation extends Component {
  state = {};
  render() {
    return (
      <div className="navbar">
        <div className="nav-left">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav-middle">
          <input className="searchTxtBox" placeholder="Search" type="text" />
          <button className="searchBtn">
            <Search />
          </button>
        </div>
        <div className="nav-right">
          <ul>
            <li className="Profile">
              <NavLink to={ROUTES.HOME}>
                <img src={profilePic} alt="" />
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="activate" to={ROUTES.HOME}>
                <Home className="nav-icon" />
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="activate" to={ROUTES.ACCOUNT}>
                <NotificationsActive className="nav-icon" />
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="activate" to={ROUTES.ADMIN}>
                <Email className="nav-icon" />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navigation;
