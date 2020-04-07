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
    font-size: 22px;
    padding: 5px 20px;
    font-weight: bold;
    display: flex;
    align-items: center;
`

const StyledNavbar = styled(Navbar)`
    margin-bottom: 20px;
`

const Logo = styled.img`
  height: 20px;
  width: 20px;
  margin-right: 10px;
`
const Header = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <StyledNavbar light expand="md">
      <Navbar className="container">
        <StyledNavbarBrand href="/"><Logo src={require("../assets/supplyHelperLogo.png")}/>Supply Helper</StyledNavbarBrand>
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
