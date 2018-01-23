import styled, { css } from 'styled-components';

export const Header = styled.header`
  background-color: #222;
  height: 80px;
  padding: 20px;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  height: 60px;
`;

export const Contents = styled.div`
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
