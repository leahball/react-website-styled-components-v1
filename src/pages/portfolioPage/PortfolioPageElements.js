import styled from "styled-components";

export const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 20px;
  z-index: 1;
  padding: 0 4%;
  background-color: ${(p) => p.theme.light};

  @media screen and (max-width: 768px) {
    padding: 5%;
  }
`;

export const PortfolioHeaderContent = styled.header`
  display: grid;
  grid-column: 1 / 7;
  border-radius: 25px;
  padding: 6% 6%;

  /* display: flex;
  align-items: center; */
  background-image: url(${require(`../../images/octopus.png`)});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: right;
  background-color: ${(p) => p.theme.lightMed};

  @media screen and (max-width: 768px) {
    padding: 50px 20px;
  }
`;

export const PortfolioMainContent = styled.main`
  display: grid;
  grid-column: 1 / 7;
  margin: 2%;

  @media screen and (max-width: 768px) {
    padding: 50px 20px;
  }
`;

export const HeaderTextWrapper = styled.div`
  width: 100%;
  padding: 2% 3% 2% 3%;
`;

export const PortfolioTextWrapper = styled.div`
  width: 100%;
  padding: 2% 3% 2% 3%;
  display: grid;
  grid-column: 3 / 7;
  gap: 20px;

  p:first-child::first-letter {
    float: left;
    font-family: "Shrikhand", cursive;
    font-size: 10rem;
    line-height: 9rem;
    padding-right: 20px;
    padding-bottom: 0;
    color: ${(p) => p.theme.contrast};
  }
`;

export const PortfolioSecondaryImages = styled.div`
  display: grid;
  grid-column: 1 / 3;
  max-width: 555px;
`;

export const PortfolioImg = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  border-radius: 25px;
`;

export const PortfolioH1 = styled.h1`
  font-size: 7rem;
  font-family: "Shrikhand", cursive;
  letter-spacing: 0.1rem;
  color: ${(p) => p.theme.ink};
  margin-bottom: 3%;
  filter: drop-shadow(2px 2px 10px white);

  @media screen and (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

export const PortfolioH2 = styled.h2`
  font-size: 3rem;
  font-family: "Poppins", sans-serif;
  color: ${(p) => p.theme.ink};
  font-weight: 300;
  position: relative;
  z-index: 1;

  :after {
    content: "";
    position: absolute;
    width: 80%;
    height: 70%;
    background-color: ${(p) => p.theme.light};
    left: -8px;
    bottom: 6px;
    z-index: -1;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const PortfolioP = styled.p`
  font-size: 1.6rem;
  line-height: 2.6rem;
  color: ${(p) => p.theme.brown};
  padding-bottom: 4%;

  span.highlight {
    background-color: ${(p) => p.theme.lightLogo};
    font-style: italic;
  }

  a {
    color: ${(p) => p.theme.contrast};
  }
  a:hover {
    color: ${(p) => p.theme.lightLogo};
    background-color: ${(p) => p.theme.ink};
  }

  @media screen and (max-width: 480px) {
    margin-bottom: 0;
  }
`;

export const PortfolioListItems = styled.div`
  display: grid;
  grid-column: 1 / 4;
  box-sizing: border-box;
  padding: 6%;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const PortfolioListH = styled.h3`
  margin-bottom: 16px;
  color: ${(p) => p.theme.contrast};
  font-size: 2rem;
  font-weight: 400;
  text-decoration: wavy;
  text-decoration-color: ${(p) => p.theme.contrast};
`;

export const PortfolioList = styled.li`
  color: ${(p) => p.theme.brown};
  text-decoration: none;
  margin-bottom: 8%;
  font-size: 1.5rem;
  line-height: 3rem;
`;
