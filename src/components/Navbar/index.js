import React from "react";
import { Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo>Leah Ball</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/">about</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">contact</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="login">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
      <Outlet />
    </>
  );
};

export default Navbar;
