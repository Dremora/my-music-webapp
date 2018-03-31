import styled from 'styled-components';

import { grey, lightGrey } from '../../styles/colors';
import { h2 } from '../../styles/fonts';

export const Root = styled.div`
  border-bottom: 2px solid ${lightGrey};
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px;
`;

export const Image = styled.img`
  background-color: transparent;
  margin: 0 10px;
`;

export const Input = styled.input`
  border-width: 0;
  ${h2};
  height: 42px;
  width: 100%;
  outline: none;
  font-weight: 600;
  color: ${grey};
  background-color: transparent;
`;
