import React, { useState } from "react";
// import Video from "../../Videos/galaxy.mp4";
import { Button } from "../ButtonElement";
import {
  HeroContainer,
  HeroBg,
  // VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      {/* <HeroBg> */}
      {/* <VideoBg autoPlay loop muted src={Video} type="video/mp4" /> */}
      {/* </HeroBg> */}
      <HeroContent>
        <HeroH1>DESIGNER + CODER</HeroH1>
        <HeroP>
          Combining innovation in design solutions with clean elegant code. As a
          collaborator, I am an intentional and curious human who specializes in
          user-centered design experiences.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="contact"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="false"
            dark="true"
          >
            Hire Me {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
