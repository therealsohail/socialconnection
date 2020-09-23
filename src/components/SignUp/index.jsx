import React, { Component } from "react";
import { auth, db } from "../Firebase/firebase";

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
      <div>
        <h2>Signup</h2>
        <form>
          <input
            onChange={this.handleChange}
            type="text"
            name="email"
            value={this.state.email}
            placeholder="Email"
          />
          <input
            onChange={this.handleChange}
            type="text"
            name="fullname"
            value={this.state.fullname}
            placeholder="fullname"
          />
          <input
            onChange={this.handleChange}
            type="text"
            name="username"
            value={this.state.username}
            placeholder="username"
          />
          <input
            onChange={this.handleChange}
            type="password"
            name="password"
            value={this.state.password}
            placeholder="password"
          />
          <button onClick={this.handleSignup}>Sign up</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
