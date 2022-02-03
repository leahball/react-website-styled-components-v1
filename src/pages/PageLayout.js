import React from "react";
import styled from "styled-components";

const Content = styled.main`
  background-color: ${(p) => p.theme.melon};
`;

const Main = styled.div`
  padding: 0;
`;

const PageLayout = ({ children }) => {
  return (
    <>
      <Content>
        <Main>{children}</Main>
      </Content>
    </>
  );
};

export default PageLayout;
