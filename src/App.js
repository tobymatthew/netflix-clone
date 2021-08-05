import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Home, Signin, Signup, Browse } from "./pages";
import { IsUserRedirect,ProtectedRoutes } from "./helpers/routes";
import * as ROUTES from "./constant/router";

export default function app() {
  const user =null;
  return (
    <div>
      <Router>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_IN}
          
          >
          <Signin />

        </IsUserRedirect>

        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_UP}
      
          >
          <Signup />

        </IsUserRedirect>

       
       <ProtectedRoutes user={user} path={ROUTES.BROWSE} exact >
       <Browse />

       </ProtectedRoutes>

       <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.HOME}
       
          >
        <Home />

        </IsUserRedirect>
      
      </Router>
    </div>
  );
}
