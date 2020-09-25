import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation/index";
import * as ROUTES from "./constants/routes";
import Landing from "./components/Landing";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import "./styles/style.css";

function App() {
  return (
    <Router>
      <Navigation />
      <Route exact path={ROUTES.LANDING} component={SignIn} />
      <Route path={ROUTES.SIGN_IN} component={SignIn} />
      <Route path={ROUTES.SIGN_UP} component={SignUp} />
      <Route path={ROUTES.HOME} component={Home} />
    </Router>
  );
}

export default App;
