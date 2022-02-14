import React from "react";
import {
  SkillsContainer,
  SkillsList,
  SkillsWrapper,
  SkillsListContainer,
  SkillsListWrapper,
  SkillsListItems,
  SkillsListTitle,
  SkillsH1,
} from "./SkillsElements";

const Skills = () => {
  return (
    <div>
      <SkillsContainer id="skills">
        <SkillsWrapper>
          <SkillsH1>Skills</SkillsH1>
          <SkillsListContainer>
            <SkillsListWrapper>
              <SkillsListItems>
                <SkillsListTitle>Programming</SkillsListTitle>
                <SkillsList>React</SkillsList>
                <SkillsList>HTML</SkillsList>
                <SkillsList>CSS</SkillsList>
                <SkillsList>JavaScript</SkillsList>
                <SkillsList>Git</SkillsList>
                <SkillsList>Node</SkillsList>
              </SkillsListItems>
              <SkillsListItems>
                <SkillsListTitle>Design</SkillsListTitle>
                <SkillsList>Figma</SkillsList>
                <SkillsList>Illustrator</SkillsList>
                <SkillsList>PhotoShop</SkillsList>
                <SkillsList>InDesign</SkillsList>
                <SkillsList>Procreate</SkillsList>
                <SkillsList>Illustration</SkillsList>
              </SkillsListItems>
            </SkillsListWrapper>
            <SkillsListWrapper>
              <SkillsListItems>
                <SkillsListTitle>Analog</SkillsListTitle>
                <SkillsList>Ceramics</SkillsList>
                <SkillsList>Mold-making</SkillsList>
                <SkillsList>Wax modeling</SkillsList>
                <SkillsList>Metal-smithing</SkillsList>
                <SkillsList>Sewing</SkillsList>
                <SkillsList>Painting</SkillsList>
              </SkillsListItems>
              <SkillsListItems>
                <SkillsListTitle>Human</SkillsListTitle>
                <SkillsList>Workshops</SkillsList>
                <SkillsList>Organizing</SkillsList>
                <SkillsList>Planning</SkillsList>
                <SkillsList>Sustainability</SkillsList>
              </SkillsListItems>
            </SkillsListWrapper>
          </SkillsListContainer>
        </SkillsWrapper>
      </SkillsContainer>
    </div>
  );
};

export default Skills;
