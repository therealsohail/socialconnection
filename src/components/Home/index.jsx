import React, { Component } from "react";
import { auth, app } from "../Firebase/firebase";

class Home extends Component {
  state = {};
  componentDidMount = () => {
    auth.onAuthStateChanged((user) => {
      console.log(user.uid);
      console.log(user.emailVerified);
      if (user.emailVerified) {
        console.log("email is verified");
      } else {
        return user
          .sendEmailVerification()
          .then((res) => {
            console.log("email Sent!");
          })
          .catch((err) => {
            console.log("error: " + err);
          });
      }
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
