import styled from "styled-components";

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(p) => p.theme.light};
  padding: 3% 6% 10% 6%;
`;

export const ProjectsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 5%;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 1% 1%;
  }
`;

export const ProjectsImage = styled.div`
  width: 100%;
  margin-bottom: 4%;
`;

export const ProjectsCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4%;
  border: 1px solid ${(p) => p.theme.melon};
  min-height: 475px;

  @media screen and (max-width: 480px) {
    padding-bottom: 3%;
    margin: 2% 0;
  }
`;

export const ProjectsIcon = styled.img`
  background-image: cover center;
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  /* height: 220px; */
`;

export const ProjectsH1 = styled.h1`
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

export const ProjectsH2 = styled.h2`
  font-size: 3rem;
  color: ${(p) => p.theme.ink};
  text-align: left;
  border-top: 2px solid ${(p) => p.theme.melon};
  padding: 2% 0;
`;

export const ProjectsP = styled.p`
  font-size: 1.2rem;
  color: ${(p) => p.theme.brown};
  text-align: left;
`;
