import styled, { createGlobalStyle } from "styled-components";

import { vermilion, whiteSmoke } from "styles/colors";
import { h1 } from "styles/fonts";

export const Page = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
`;

export const Header = styled.header`
  padding: 20px 0 20px 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HomeLink = styled.a`
  text-decoration: none;
  display: flex;
`;

export const H1 = styled.h1`
  ${h1};
  margin: 0;
  font-weight: 700;
  margin-left: 10px;
  color: ${vermilion};
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  padding: 0 10px;
  margin: 0 auto;
  width: 100%;
`;

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background-color: ${whiteSmoke};
    color: white;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    flex-shrink: 0;
    min-width: 0;
  }
`;
