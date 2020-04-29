import React from "react";
import styled from "@emotion/styled";

const HeaderContainer = styled.header`
  background-color: #26c6da;
  padding: 10px;
  font-weight: bold;
  color: #ffffff;
`;

const HeaderTitle = styled.h1`
  font-size: 2rem;
  margin: 0;
  font-family: "Roboto", sans-serif;
  text-align: center;
`;

const Header = ({ title }) => {
  return (
    <HeaderContainer>
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;
