import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import SignUpForm from "./components/formComponents/SignUpForm";
import LoginForm from "./components/formComponents/LoginForm";
import LandingPage from "./components/landingPageComponents/LandingPage";
import RequestsDisplay from "./components/neededSupplies/RequestsDisplay";
import Map from "./components/mapbox/Map.js";
import NavBar from "./components/navbar/NavBar";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/signup">
          <SignUpForm />
        </Route>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route exact path="/">
          <LandingPage />
        </Route>
      </Switch>

      <PrivateRoute path="/requests" component={RequestsDisplay} />
      {/* <Route exact path="/requests">
        <RequestsDisplay />
      </Route> */}

      <PrivateRoute path="/map" component={Map} />
      {/* <Route exact path="/map" component={Map} /> */}
    </>
  );
}

export default App;
