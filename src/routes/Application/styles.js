import styled, { css } from 'styled-components';
import { h1 } from '../../styles/fonts';

export const Header = styled.header`
  padding: 20px 50px;
`;

export const H1 = styled.h1`
  ${h1};
  margin: 0;
  font-weight: 700;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  padding: 0 10px;
  margin: 0 auto;
`;

export const global = css`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    flex-shrink: 0;
    min-width: 0;
  }
`;
