import React from "react";
import {
  SkillsContainer,
  SkillsLink,
  SkillsWrapper,
  SkillsLinksContainer,
  SkillsLinksWrapper,
  SkillsLinkItems,
  SkillsLinkTitle,
  SkillsH1,
} from "./SkillsElements";

const Skills = () => {
  return (
    <div>
      <SkillsContainer id="skills">
        <SkillsWrapper>
          <SkillsH1>Skills</SkillsH1>
          <SkillsLinksContainer>
            <SkillsLinksWrapper>
              <SkillsLinkItems>
                <SkillsLinkTitle>Programming</SkillsLinkTitle>
                <SkillsLink>React</SkillsLink>
                <SkillsLink>HTML</SkillsLink>
                <SkillsLink>CSS</SkillsLink>
                <SkillsLink>JavaScript</SkillsLink>
                <SkillsLink>Git</SkillsLink>
                <SkillsLink>Node</SkillsLink>
              </SkillsLinkItems>
              <SkillsLinkItems>
                <SkillsLinkTitle>Design</SkillsLinkTitle>
                <SkillsLink>Figma</SkillsLink>
                <SkillsLink>Illustrator</SkillsLink>
                <SkillsLink>PhotoShop</SkillsLink>
                <SkillsLink>InDesign</SkillsLink>
                <SkillsLink>Procreate</SkillsLink>
              </SkillsLinkItems>
            </SkillsLinksWrapper>
            <SkillsLinksWrapper>
              <SkillsLinkItems>
                <SkillsLinkTitle>Analog</SkillsLinkTitle>
                <SkillsLink>Ceramics</SkillsLink>
                <SkillsLink>Production Molds</SkillsLink>
                <SkillsLink>Wax modeling</SkillsLink>
                <SkillsLink>Metalsmithing</SkillsLink>
                <SkillsLink>Sewing</SkillsLink>
                <SkillsLink>Painting</SkillsLink>
              </SkillsLinkItems>
              <SkillsLinkItems>
                <SkillsLinkTitle>Human</SkillsLinkTitle>
                <SkillsLink>Workshop Facilitation</SkillsLink>
                <SkillsLink>Organizing</SkillsLink>
                <SkillsLink>Project Management</SkillsLink>
                <SkillsLink>Sustainability</SkillsLink>
              </SkillsLinkItems>
            </SkillsLinksWrapper>
          </SkillsLinksContainer>
        </SkillsWrapper>
      </SkillsContainer>
    </div>
  );
};

export default Skills;
