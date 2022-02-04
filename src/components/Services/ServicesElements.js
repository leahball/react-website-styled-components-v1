import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(p) => p.theme.cream};
  padding: 4%;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesImage = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const ServicesCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  padding: 4%;

  /* &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  } */
`;

export const ServicesIcon = styled.img`
  background-image: cover;
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  height: 200px;
`;

export const ServicesH1 = styled.h1`
  font-size: 4rem;
  color: ${(p) => p.theme.ink};
  margin-bottom: 34px;

  @media screen and (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 3rem;
  color: ${(p) => p.theme.ink};
  margin: 4%;
  text-align: left;
`;

export const ServicesP = styled.p`
  font-size: 1.2rem;
  text-align: left;
`;
