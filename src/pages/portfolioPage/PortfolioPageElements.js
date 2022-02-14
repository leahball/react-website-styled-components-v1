import styled from "styled-components";

export const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  z-index: 1;
  padding: 0 4%;
  background-color: ${(p) => p.theme.light};
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 5%;
    grid-template-columns: 1fr 1fr;
  }
`;

export const PortfolioHeaderContent = styled.header`
  display: grid;
  grid-column: 1 / span 6;
  border-radius: 25px;
  padding: 6% 6%;
  max-width: 1200px;
  background-image: url(${require(`../../images/octopus.png`)});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: right;
  background-color: ${(p) => p.theme.lightMed};

  @media screen and (max-width: 768px) {
    padding: 50px 20px;
    background-image: none;
  }
`;

export const PortfolioMainContent = styled.main`
  display: grid;
  grid-column: 1 / span 6;
  margin: 2%;
  max-width: 1200px;
  border-bottom: 3px dotted;
  border-bottom-color: ${(p) => p.theme.melon};

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

  @media screen and (max-width: 768px) {
    grid-column: 1 / 8;
    max-width: 325px;
    justify-self: center;
  }
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
    font-size: 7rem;
    line-height: 8rem;
    color: ${(p) => p.theme.melon};
    filter: none;
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
    font-size: 2rem;
    :after {
      content: none;
    }
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

export const PortfolioListWrapper = styled.div`
  display: grid;
  grid-column: 1 / span 6;
  max-width: 1200px;
`;

export const PortfolioListImages = styled.div`
  display: grid;
  grid-column: 4 / 7;
  padding-top: 5%;
  max-width: 555px;

  @media screen and (max-width: 768px) {
    grid-column: 1 / span 6;
    justify-content: flex-end;
  }
`;

export const PortfolioListItems = styled.div`
  display: grid;
  grid-column: 1 / 3;
  padding: 6%;

  a {
    color: ${(p) => p.theme.contrast};
  }
  a:hover {
    color: ${(p) => p.theme.lightLogo};
    background-color: ${(p) => p.theme.ink};
  }

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
  text-decoration: overline;
  text-decoration-style: wavy;
  text-decoration-color: ${(p) => p.theme.melon};
`;

export const PortfolioList = styled.li`
  color: ${(p) => p.theme.brown};
  text-decoration: none;
  margin-bottom: 8%;
  font-size: 1.5rem;
  line-height: 3rem;

  span.title {
    font-weight: 700;
  }
`;

export const HighlightWrapper = styled.div`
  max-width: 1200px;
  margin: 5% 3%;
  display: grid;
  gap: 6%;
  grid-column: 1 / span 6;
  align-items: center;
  justify-content: center;
  height: 300px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 1% 1%;
    height: auto;
  }
`;

export const HighlightTitle = styled.h2`
  font-size: 6rem;
  font-family: "Shrikhand", cursive;
  display: grid;
  grid-column: 1 / span(6);
  letter-spacing: 0.1rem;
  color: ${(p) => p.theme.ink};
  background-color: ${(p) => p.theme.lightMed};
  padding: 6%;
  border-radius: 15px;

  @media screen and (max-width: 768px) {
    font-size: 4rem;
    padding: 2% 5%;
  }
`;

export const HighlightCol1 = styled.div`
  display: grid;
  grid-column: 1 / span 3;
`;
export const HighlightCol2 = styled.div`
  display: grid;
  grid-column: 4 / span 3;
`;

export const HighlightImage = styled.div`
  width: 100%;
  margin-bottom: 4%;
`;

export const HighlightCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${(p) => p.theme.melon};
  min-height: 475px;
  max-width: 420px;
  padding: 3%;

  @media screen and (max-width: 480px) {
    padding-bottom: 4%;
    margin: 2% 0;
  }
`;

export const HighlightIcon = styled.img`
  background-image: cover center;
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`;

export const HighlightH1 = styled.h1`
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

export const HighlightH2 = styled.h2`
  font-size: 3rem;
  color: ${(p) => p.theme.ink};
  text-align: left;
  border-top: 2px solid ${(p) => p.theme.melon};
  padding: 2% 0;
`;

export const HighlightP = styled.p`
  font-size: 1.2rem;
  color: ${(p) => p.theme.brown};
  text-align: left;
`;
