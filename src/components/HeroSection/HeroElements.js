import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
  background: ${(p) => p.theme.light};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2% 4%;
  height: 100vh;
  position: relative;
  z-index: 1;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  width: 95%;
  position: absolute;
  padding: 6% 6%;
  display: flex;
  flex-direction: column;
  align-items: left;
  top: 0;
  border-radius: 15px;
  background: ${(p) => p.theme.ink};

  @media screen and (max-width: 768px) {
    padding: 6%;
    min-height: 550px;
    justify-content: center;
  }

  @media screen and (max-width: 480px) {
    min-height: 300px;
  }
`;

export const HeroH1 = styled.h1`
  color: ${(p) => p.theme.melon};
  font-family: "Shrikhand";
  font-size: 8rem;
  text-align: left;

  @media screen and (max-width: 768px) {
    font-size: 5rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 5rem;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  /* background-color: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(5px); */
  /* padding: 2% 4%; */
  border-radius: 15px;
  color: ${(p) => p.theme.light};
  font-family: "poppins";
  font-weight: 300;
  font-style: italic;
  text-align: left;
  font-size: 2.8rem;
  line-height: 6rem;
  padding-bottom: 3%;
  display: inline;
  text-decoration: overline;
  text-decoration-color: pink;

  @media screen and (max-width: 768px) {
    font-size: 2.4rem;
    line-height: 4rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 2.2rem;
    line-height: 4rem;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  width: 40%;
  align-items: left;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
