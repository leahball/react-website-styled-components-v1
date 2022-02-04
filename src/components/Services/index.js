import React from "react";
import Icon1 from "./../../images/chaad.png";
import Icon2 from "./../../images/ceramics.png";
import Icon3 from "./../../images/change.png";
import Icon4 from "./../../images/westSupply.png";

import {
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesP,
  ServicesImage,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="projects">
      <ServicesH1>Projects</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesImage>
            <ServicesIcon src={Icon1} />
          </ServicesImage>

          <ServicesH2>CHAAD</ServicesH2>
          <ServicesP>
            CHAAD is a community resource and advocacy space dedicated to an
            accountable hospitality industry that empowers pleasurable lives for
            its workers. At CHAAD I worked with a remote team to formulate the
            mission, brand, and internal structure. I lead on community outreach
            and established relationships that resulted in funding, event
            partnerships, and growth of advocacy networks.
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesImage>
            <ServicesIcon src={Icon2} />
          </ServicesImage>

          <ServicesH2>Pleasure Ceramics</ServicesH2>
          <ServicesP>
            Developed the digital assets, identity design, illustrations,
            marketing and promotional design and product development for a line
            of pleasure focused ceramic homegoods shown across the country and
            in major retail stores. I designed and Facilitated over 30 workshops
            for 500+ people in art making to unlock flow and creativity.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesImage>
            <ServicesIcon src={Icon3} />
          </ServicesImage>
          <ServicesH2>Change Creative</ServicesH2>
          <ServicesP>
            Built the website for a successful interior design firm to highlight
            their ideal projects and revamp their online presence. Organized and
            sorted assets, worked with the client to develop the brand voice.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesImage>
            <ServicesIcon src={Icon4} />
          </ServicesImage>
          <ServicesH2>West Supply Foundry</ServicesH2>
          <ServicesP>
            With roles in production and design I helped grow the team from
            6-40, built the website to showcase their services helping them to
            land world renowned clients, developed prototypes for their
            signature collection.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
