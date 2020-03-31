import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";
import styled from "styled-components";

const StyledNavbarBrand = styled(NavbarBrand)`
    font-family: 'Righteous', cursive;
    font-size: 22px;
    background: white;
    padding: 5px 20px;
    border-radius: 20px;
    border: 3px solid green;
`

const StyledNavbar = styled(Navbar)`
    margin-bottom: 20px;
`
const Header = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <StyledNavbar color="light" light expand="md">
      <Navbar className="container">
        <StyledNavbarBrand href="/">Supply Assistance</StyledNavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">GitHub</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </StyledNavbar>
  );
};

export default Header;
