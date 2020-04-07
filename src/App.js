
import React, { useEffect, useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import SignUpForm from "./components/formComponents/SignUpForm";
import LoginForm from "./components/formComponents/LoginForm";
import EditCard from "./components/requestsPageComponents/EditCard"
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
import AxiosWithAuth from "./utils/AxiosWithAuth";
import PrivateRoute from "./utils/PrivateRoute";
import RequestList from './components/requestsPageComponents/RequestList'
import ExamplePage from './components/requestsPageComponents/examplePage'
import NewRequest from './components/requestsPageComponents/NewRequest'
import ProfilePage from "./components/profileComponents/ProfilePage";
import UserNav from "./components/userNav/UserNav";
import {appStore} from "./assets/index.js";

function App() {
  const coronaHelpToken = localStorage.getItem("coronaHelpToken");
  const [ token, setToken ] = useState(coronaHelpToken);
  const [ user, setUser ] = useState(null);
  const getUserInfo = () => {
    if (token) {
      AxiosWithAuth()
      .get("/api/users/user-info")
      .then(response => setUser(response.data))
      .catch(error => console.log("Could not get user info: ", error.response));
    }
  };
  const logOutUser = () => {
    localStorage.removeItem("coronaHelpToken");
    setToken(null);
    setUser(null);
  };
  useEffect(getUserInfo, [ token ]);
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

          {
            user ?
            <UserNav user = { user } logOutUser = { logOutUser } /> :
            <>
              <NavLink to="/login" style={{ textDecoration: "none" }}>
                <StyledLink>Login</StyledLink>
              </NavLink>
              <NavLink to="/signup" style={{ textDecoration: "none" }}>
                <SignUpButton>Sign Up</SignUpButton>
              </NavLink>
            </>
          }
        </NavLinksSection>
      </Nav>
      <Switch>
        <Route path="/signup">
          <SignUpForm />
        </Route>
        <Route path="/login">
          <LoginForm updateToken = { setToken } />
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
      <Route path="/profile/:id">
        <ProfilePage />
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
