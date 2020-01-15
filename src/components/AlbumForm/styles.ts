import styled from 'styled-components';

import { white } from 'styles/colors';

export const Form = styled.form`
  background: ${white};
  padding: 20px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 8px 3px rgba(0, 0, 0, 0.09);
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
