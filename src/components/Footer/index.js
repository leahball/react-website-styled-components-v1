import React from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/login">How I work</FooterLink>
              <FooterLink to="/login">Testimonials</FooterLink>
              <FooterLink to="/login">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Me</FooterLinkTitle>
              <FooterLink to="/login">How I work</FooterLink>
              <FooterLink to="/login">Testimonials</FooterLink>
              <FooterLink to="/login">Terms of Service</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/login">How I work</FooterLink>
              <FooterLink to="/login">Testimonials</FooterLink>
              <FooterLink to="/login">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/login">How I work</FooterLink>
              <FooterLink to="/login">Testimonials</FooterLink>
              <FooterLink to="/login">Terms of Service</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">Leah Ball</SocialLogo>
            <WebsiteRights>
              Leah Ball © {new Date().getFullYear()} All Rights Reserved
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="//" target="_blank" aria-label="LinkedIn">
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink href="//" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
