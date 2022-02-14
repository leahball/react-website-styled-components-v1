import React from "react";
import Icon1 from "./../../images/chaad.png";
import Icon2 from "./../../images/ceramics.png";
import Icon3 from "./../../images/change.png";
import Icon4 from "./../../images/westSupply.png";
import OctopusBanner from "./../../images/OctopusBanner.png";

import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsH2,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsIcon,
  ProjectsP,
  ProjectsImage,
  ProjectsHighlightCard,
} from "./ProjectsElements";

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <ProjectsH1>Projects</ProjectsH1>
      <ProjectsHighlightCard>
        <ProjectsImage>
          <ProjectsIcon src={OctopusBanner} />
        </ProjectsImage>
        <a href="/octopus">
          <ProjectsH2>
            <span className="featured">Featured Project:</span> Octopus Galaxy
          </ProjectsH2>
        </a>
      </ProjectsHighlightCard>

      <ProjectsWrapper>
        <ProjectsCard>
          <ProjectsImage>
            <ProjectsIcon src={Icon1} />
          </ProjectsImage>

          <ProjectsH2>CHAAD</ProjectsH2>
          <ProjectsP>
            CHAAD is a community resource and advocacy space dedicated to an
            accountable hospitality industry that empowers pleasurable lives for
            its workers. At CHAAD I worked with a remote team to formulate the
            mission, brand, and internal structure. I lead on community outreach
            and established relationships that resulted in funding, event
            partnerships, and growth of advocacy networks.
          </ProjectsP>
        </ProjectsCard>

        <ProjectsCard>
          <ProjectsImage>
            <ProjectsIcon src={Icon2} />
          </ProjectsImage>

          <ProjectsH2>Pleasure Ceramics</ProjectsH2>
          <ProjectsP>
            Developed the digital assets, identity design, illustrations,
            marketing and promotional design and product development for a line
            of pleasure focused ceramic homegoods shown across the country and
            in major retail stores. I designed and Facilitated over 30 workshops
            for 500+ people in art making to unlock flow and creativity.
          </ProjectsP>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsImage>
            <ProjectsIcon src={Icon3} />
          </ProjectsImage>
          <ProjectsH2>Change Creative</ProjectsH2>
          <ProjectsP>
            Built the website for a successful interior design firm to highlight
            their ideal projects and revamp their online presence. Organized and
            sorted assets, worked with the client to develop the brand voice.
          </ProjectsP>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsImage>
            <ProjectsIcon src={Icon4} />
          </ProjectsImage>
          <ProjectsH2>West Supply Foundry</ProjectsH2>
          <ProjectsP>
            With roles in production and design I helped grow the team from
            6-40, built the website to showcase their Services helping them to
            land world renowned clients, developed prototypes for their
            signature collection.
          </ProjectsP>
        </ProjectsCard>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
