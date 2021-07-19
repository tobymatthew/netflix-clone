import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Signin, Signup, Browse } from "./pages";
// import * as Routes from "./constant/router";

export default function app() {
  return (
    <div>
      <Router>
        <Route exact path="/signin">
          <Signin />
        </Route>

        <Route exact path="/signup">
          <Signup />
        </Route>

        <Route exact path="/browse">
          <Browse />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>
      </Router>
    </div>
  );
}
