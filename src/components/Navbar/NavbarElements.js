import styled from "styled-components";
import { Link } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${(p) => p.theme.light};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 1%;
  max-width: 850px;

  @media screen and (max-width: 768px) {
    height: 100px;
  }
`;

export const NavLogo = styled(LinkS)`
  color: ${(p) => p.theme.contrast};
  justify-self: flex-start;
  cursor: pointer;
  font-size: 3rem;
  display: flex;
  align-items: center;
  margin-left: 14px;
  font-family: "Shrikhand", cursive;
  letter-spacing: 0.1rem;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 2.2rem;
    cursor: pointer;
    color: ${(p) => p.theme.ink};
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -12px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  /* height: 60px; */
`;

export const NavLinks = styled(Link)`
  color: ${(p) => p.theme.contrast};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-family: "poppins";
  font-weight: 300;
  font-style: italic;

  &:hover {
    text-decoration: underline;
    text-decoration-style: wavy;
    text-decoration-color: ${(p) => p.theme.melon};
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  border-radius: 20px;
  background: ${(p) => p.theme.melon};
  white-space: nowrap;
  padding: 10px 20px;
  color: ${(p) => p.theme.ink};
  font-size: 1.5rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${(p) => p.theme.contrast};
    color: ${(p) => p.theme.light};
  }
`;
