
import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import SignUpForm from "./components/formComponents/SignUpForm";
import LoginForm from "./components/formComponents/LoginForm";
import EditCard from './components/requestsPageComponents/EditCard'
import LandingPage from "./components/landingPageComponents/LandingPage";
import {
  Nav,
  NavLinksSection,
  StyledLink,
  SignUpButton
} from "./components/styledNav";
import { Footer } from "./components/styledFooter";
import RequestsDisplay from "./components/neededSupplies/RequestsDisplay";
import Map from "./components/mapbox/Map.js";
import PrivateRoute from "./utils/PrivateRoute";
import RequestList from './components/requestsPageComponents/RequestList'
import ExamplePage from './components/requestsPageComponents/examplePage'
import NewRequest from './components/requestsPageComponents/NewRequest';
import {appStore} from './assets/index.js';


function App() {
  return (
    <>
      <Nav>
        <div style={{ color: "red", fontSize: "2rem" }}>
          {/* <div className="logo">
          <a href="index.html">
              <img src="img/logo.png"/>
          </a> */}
          <h1>SupplyHelper: logo placeholder</h1>
        </div>
        <NavLinksSection>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <StyledLink>Home</StyledLink>
          </NavLink>
          {/* <NavLink><StyledLink>About</StyledLink></NavLink> */}

          <NavLink to="/login" style={{ textDecoration: "none" }}>
            <StyledLink>Login</StyledLink>
          </NavLink>
          <NavLink to="/signup" style={{ textDecoration: "none" }}>
            <SignUpButton>Sign Up</SignUpButton>
          </NavLink>
        </NavLinksSection>
      </Nav>
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
     <Route path="/requestlist">
        <RequestList />
      </Route>
      <Route path="/newrequest">
        <NewRequest />
      </Route>
      <Route path="/testing">
        <EditCard />
      </Route>
     <Route path="/example">
        <ExamplePage />
      </Route>
      </Switch>

      <PrivateRoute path="/requests" component={RequestsDisplay} />
      {/* <Route exact path="/requests">
        <RequestsDisplay />
      </Route> */}

      <PrivateRoute path="/map" component={Map} />
      {/* <Route exact path="/map" component={Map} /> */}

      <Footer>
        <a href="http://localhost:3000/">
          <img src = { appStore } alt = 'apple store link' />
        </a>
      </Footer>
    </>
  );
}

export default App;
