import styled from "styled-components";

export const PortfolioGrid = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 3% 4%;
  justify-content: center;
  background-color: ${(p) => p.theme.lightMed};
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    padding: 5%;
  }
`;

export const PortfolioContent = styled.div`
  padding: 3% 5%;
  background: ${(p) => p.theme.light};

  @media screen and (max-width: 768px) {
    padding: 50px 20px;
  }
`;

export const PortfolioSecondaryImages = styled.img`
  border: 1 px solid;
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  border-radius: 25px;
`;

export const PortfolioH1 = styled.h1`
  font-size: 4.5rem;
  font-family: "Shrikhand", cursive;
  letter-spacing: 0.1rem;
  text-decoration-color: ${(p) => p.theme.melon};
  margin-bottom: 36px;

  @media screen and (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

export const PortfolioH2 = styled.h2`
  font-size: 2.5rem;
  font-family: "Poppins", sans-serif;
  text-decoration-color: ${(p) => p.theme.ink};

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const PortfolioP = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 2rem;
  line-height: 3.4rem;
  color: ${(p) => p.theme.brown};

  @media screen and (max-width: 480px) {
    margin-bottom: 0;
  }
`;

export const PortfolioListH = styled.h1`
  margin-bottom: 16px;
  color: ${(p) => p.theme.contrast};
  font-size: 1.5rem;
  font-weight: 300;
  text-transform: uppercase;
`;

export const PortfolioListItems = styled.div`
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

export const PortfolioList = styled.li`
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
