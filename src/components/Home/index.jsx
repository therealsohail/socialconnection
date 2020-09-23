import React, { Component } from "react";
import { auth, app } from "../Firebase/firebase";

class Home extends Component {
  state = {};
  componentDidMount = () => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
    });
  };
  render() {
    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  }
}

export default Home;
