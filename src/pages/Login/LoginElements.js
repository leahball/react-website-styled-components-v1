import styled from "styled-components";

export const LoginContainer = styled.div`
  height: 800px;
  display: flex;
  align-items: center;
  background: ${(p) => p.theme.light};
  padding-top: 80px;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  /* @media screen and (max-width: 480px) {
    height: 1300px;
  } */
`;
export const LoginWrapper = styled.div`
  display: flex;
  flex-flow: column;
  /* justify-content: center; */
  height: 100%;
  width: 100%;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  min-width: 350px;
  flex-direction: column;
`;

export const LoginH = styled.h1`
  margin-bottom: 24px;
  font-size: 32px;
  line-height: 1.1;
  font-weight: 600;
  color: "#783857";

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

export const Input = styled.input`
  margin-bottom: 2%;
  padding: 2%;
`;

export const Button = styled.button`
  padding: 2%;
  border-radius: 10px;
  margin-top: 4%;
  background-color: ${(p) => p.theme.contrast};
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: ${(p) => p.theme.melon};
  }
`;
