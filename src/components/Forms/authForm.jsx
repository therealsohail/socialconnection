import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { auth, db } from "../Firebase/firebase";
import auth_img from "../../Assets/images/auth_img_2.svg";
import { Link } from "react-router-dom";

class AuthForm extends Component {
  handleForms = (page, welcomeMessage) => {
    if (page === "signup") {
      return (
        <div className="authCard">
          <h4 className="appLogo">
            social<b>Connection</b>
          </h4>

          <h2 className="tagLine">Here We Do Connect.</h2>

          <p className="welcomeMsg">{welcomeMessage}</p>
          <form className="authForm">
            <TextField
              id="outlined-full-width"
              label="Email"
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              id="outlined-full-width"
              label="Fullname"
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              id="outlined-full-width"
              label="Username"
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              id="outlined-full-width"
              label="Password"
              variant="outlined"
              type="password"
            />
            <br />
            <br />
            <button className="filled-button" onClick={this.handleSignup}>
              Sign up
            </button>
            &nbsp;&nbsp;
            <Link to="/signin">
              <button className="outlined-button" onClick={this.handleSignup}>
                Login
              </button>
            </Link>
          </form>
        </div>
      );
    } else if (page === "signin") {
      return (
        <div className="authCard">
          <h4 className="appLogo">
            social<b>Connection</b>
          </h4>

          <h2 className="tagLine">Here We Do Connect.</h2>

          <p className="welcomeMsg">{welcomeMessage}</p>
          <form className="authForm">
            <TextField
              id="outlined-full-width"
              label="Email"
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              id="outlined-full-width"
              label="Password"
              variant="outlined"
              type="password"
            />
            <br />
            <br />
            <button className="filled-button" onClick={this.handleSignup}>
              Login
            </button>
            &nbsp;&nbsp;
            <Link to="/signup">
              <button className="outlined-button" onClick={this.handleSignup}>
                Sign up
              </button>
            </Link>
          </form>
        </div>
      );
    }
  };
  render() {
    const welcomeMessage =
      this.props.page === "signup"
        ? "Don't have account? You can signup for free."
        : "Welcome Back, Please Login To your Account";
    return (
      <div className="auth">
        <div className="tone-1">
          <img src={auth_img} alt="socialize" />
        </div>
        <div className="tone-2">
          {this.handleForms(this.props.page, welcomeMessage)}
        </div>
      </div>
    );
  }
}

export default AuthForm;
