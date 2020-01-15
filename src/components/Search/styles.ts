import styled from 'styled-components';

import { grey, lightGrey, white } from 'styles/colors';
import { medium } from 'styles/fonts';

export const Root = styled.div`
  border: 2px solid ${lightGrey};
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
  padding: 0 10px;
  background-color: ${white};
`;

export const Image = styled.img`
  background-color: transparent;
  margin: 0 20px 0 10px;
`;

export const Input = styled.input`
  border-width: 0;
  ${medium};
  height: 42px;
  width: 100%;
  outline: none;
  color: ${grey};
  padding: 0;
  background-color: transparent;
  flex-shrink: 1;
`;
