import styled from "styled-components";

export const SkillsContainer = styled.div`
  background-color: ${(p) => p.theme.lightMed};
  /* padding: 10% 6%; */
  height: 860px;

  @media screen and (max-width: 820px) {
    min-height: 1000px;
  }
`;

export const SkillsWrapper = styled.div`
  padding: 8% 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const SkillsListContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const SkillsListWrapper = styled.div`
  display: flex;
  padding: 2% 0;
  border-top: 2px solid ${(p) => p.theme.light};
  border-bottom: 2px solid ${(p) => p.theme.light};

  @media screen and (max-width: 820px) {
    flex-direction: column;
    padding: 2%;
  }
`;

export const SkillsListItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 180px;
  box-sizing: border-box;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;
export const SkillsH1 = styled.h1`
  font-size: 4.5rem;
  color: ${(p) => p.theme.ink};
  text-decoration: underline;
  text-decoration-style: wavy;
  text-decoration-color: ${(p) => p.theme.melon};
  margin-bottom: 36px;

  @media screen and (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

export const SkillsListTitle = styled.h1`
  margin-bottom: 16px;
  color: ${(p) => p.theme.contrast};
  font-size: 1.5rem;
  font-weight: 300;
  text-transform: uppercase;
`;

export const SkillsList = styled.li`
  color: ${(p) => p.theme.brown};
  text-decoration: none;
  margin-bottom: 8%;
  font-size: 1.5rem;
  line-height: 4rem;
  position: relative;
  z-index: 1;
  text-decoration: overline;
  text-decoration-color: ${(p) => p.theme.melon};

  :after {
    content: "";
    position: absolute;
    width: 80%;
    height: 50%;
    background-color: ${(p) => p.theme.light};
    left: -8px;
    bottom: 6px;
    z-index: -1;
  }
`;
