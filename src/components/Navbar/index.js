import React from "react";
import { Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll/modules";
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
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            Leah Ball
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/">about</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">work</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">projects</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="login">client portal</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
      <Outlet />
    </>
  );
};

export default Navbar;
