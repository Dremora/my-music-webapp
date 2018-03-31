import styled from 'styled-components';

import { grey } from '../../styles/colors';

export const Container = styled.label`
  display: flex;
  align-items: flex-start;
  margin: 5px 0;
`;

export const Label = styled.div`
  width: 25%;
  text-align: right;
  padding: 8px 20px 8px 0;
  color: ${grey};
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
`;
