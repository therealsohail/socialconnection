import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { auth, db } from "../Firebase/firebase";
import auth_img from "../../Assets/images/auth_img_2.svg";
import { Link, withRouter } from "react-router-dom";

class AuthForm extends Component {
  state = {
    email: "",
    fullname: "",
    username: "",
    password: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSignup = (e) => {
    e.preventDefault();
    return auth
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        console.log("User created!");
        console.log(res);
      })
      .catch((err) => {
        console.log("Error: " + err);
      });
  };

  handleSigin = (e) => {
    e.preventDefault();

    return auth
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        this.props.history.push("/home");
      });
  };

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
              // error
              id="outlined-full-width"
              label="Email"
              variant="outlined"
              name="email"
              value={this.state.email}
              helperText=""
              onChange={this.handleChange}
            />
            <br />
            <br />
            <TextField
              id="outlined-full-width"
              label="Fullname"
              variant="outlined"
              name="fullname"
              value={this.state.fullname}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <TextField
              id="outlined-full-width"
              label="Username"
              variant="outlined"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <TextField
              id="outlined-full-width"
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <button className="filled-button" onClick={this.handleSignup}>
              Sign up
            </button>
            &nbsp;&nbsp;
            <Link to="/signin">
              <button className="outlined-button">Login</button>
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
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <TextField
              id="outlined-full-width"
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <button className="filled-button" onClick={this.handleSigin}>
              Login
            </button>
            &nbsp;&nbsp;
            <Link to="/signup">
              <button className="outlined-button">Sign up</button>
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

export default withRouter(AuthForm);
