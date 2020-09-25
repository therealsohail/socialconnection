import React, { Component } from "react";
import { auth, db } from "../Firebase/firebase";
import auth_img from "../../Assets/images/auth_img_2.svg";
import logo from "../../Assets/images/logo.png";
import TextField from "@material-ui/core/TextField";

class SignUp extends Component {
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
  render() {
    return (
      <div className="signup">
        <div className="tone-1">
          <img src={auth_img} alt="socialize" />
        </div>
        <div className="tone-2">
          <div className="signupCard">
            <h4 className="appLogo">
              social<b>Connection</b>
            </h4>

            <h2 className="tagLine">Here We Do Connect.</h2>

            <p className="welcomeMsg">
              Welcome Back, Please Login To your Account
            </p>
            <form className="signupForm">
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
              <button className="signupBtn" onClick={this.handleSignup}>
                Sign up
              </button>
              &nbsp;&nbsp;
              <button className="LoginBtn" onClick={this.handleSignup}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
