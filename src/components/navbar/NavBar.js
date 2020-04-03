import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import {
  Nav,
  NavLinksSection,
  StyledLink,
  NavHead,
  SignUpButton
} from "./styledNav";
import "./nav.css";

function NavBar() {
  return (
    <Nav>
      <NavHead>
        <span
          class="iconify"
          data-icon="fa-solid:hand-holding-heart"
          data-inline="false"
        ></span>
      </NavHead>
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
  );
}

export default NavBar;
