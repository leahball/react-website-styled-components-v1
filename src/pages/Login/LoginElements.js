import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  background-color: ${(p) => p.theme.cream};
  height: 100%;
  width: 100%;
  align-items: center;
  margin-top: 25px;
`;

export const Form = styled.form`
  display: flex;
  min-width: 350px;
  flex-direction: column;
`;

export const Input = styled.input`
  margin-bottom: 2%;
  padding: 2%;
`;

export const Button = styled.button`
  padding: 2%;
  border-radius: 10px;
  margin-top: 4%;
  background-color: ${(p) => p.theme.heliotrope};
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: ${(p) => p.theme.melon};
  }
`;
