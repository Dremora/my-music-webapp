import styled from 'styled-components';

import { white } from '../../styles/colors';

export const Form = styled.form`
  background: ${white};
  padding: 20px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
