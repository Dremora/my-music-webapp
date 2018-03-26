import styled, { css } from 'styled-components';
import { darken } from 'polished';

import { platinum } from '../../styles/colors';

const styles = css`
  border: 2px solid ${platinum};
  font-size: 16px;
  line-height: 2;
  padding: 2px 10px;
  display: block;
  font-family: 'Lato';
  width: 100%;
  flex-grow: 1;
  flex-shrink: 1;
  color: ${darken(0.6, platinum)};
  transition: all 0.2s;
  background: white;

  &:focus {
    outline: none;
    border-color: ${darken(0.2, platinum)};
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.09);
  }
`;

export const Input = styled.input`
  ${styles};
`;

export const Textarea = styled.textarea`
  ${styles};
`;
