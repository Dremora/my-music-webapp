import styled from 'styled-components';

import { lighterGrey } from 'styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
`;

export const Bar = styled.div`
  width: 30px;
  height: 4px;
  border-radius: 2px;
  background-color: ${lighterGrey};
  margin: 2px 0;
`;
