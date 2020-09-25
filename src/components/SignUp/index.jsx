import React, { Component } from "react";
import { auth, db } from "../Firebase/firebase";
import AuthForm from "../Forms/authForm";

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
    return <AuthForm page="signup" />;
  }
}

export default SignUp;
