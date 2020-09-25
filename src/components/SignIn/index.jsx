import React, { Component } from "react";
import { auth } from "../Firebase/firebase";
import AuthForm from "../Forms/authForm";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSignin = (e) => {
    e.preventDefault();
    return auth
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        this.props.history.push("/home");
      });
  };
  render() {
    return <AuthForm page="signin" />;
  }
}

export default SignIn;
