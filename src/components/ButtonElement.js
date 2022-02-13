import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) =>
    primary ? "#DB3FFB" : "#FE9A8D"}; //heliotrope melon
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 32px")};
  color: ${({ dark }) => (dark ? "#EFE6EF" : "#4D097B")}; //light ink
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) =>
      primary ? "#FE9A8D" : "#DB3FFB"}; //melon heliotrope
  }
`;
