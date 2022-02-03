import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#DB3FFB" : "#FFBBB2")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 32px")};
  color: ${({ dark }) => (dark ? "#FFFDF8" : "#4D097B")};
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
    background: ${({ primary }) => (primary ? "#FFBBB2" : "#DB3FFB")};
  }
`;
