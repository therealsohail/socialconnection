import React, { Component } from "react";
import { auth } from "../Firebase/firebase";

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
    return (
      <div>
        <h2>Sign in</h2>
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
            type="password"
            name="password"
            value={this.state.password}
            placeholder="Password"
          />
          <button onClick={this.handleSignin}>SignIn</button>
        </form>
      </div>
    );
  }
}

export default SignIn;
