import styled, { css } from 'styled-components';

import { darkPlatinum, darkerPlatinum, platinum } from 'styles/colors';
import { base } from 'styles/fonts';

const styles = css`
  ${base};
  border: 2px solid ${platinum};
  line-height: 2;
  padding: 2px 10px;
  display: block;
  width: 100%;
  flex-grow: 1;
  flex-shrink: 1;
  color: ${darkPlatinum};
  transition: all 0.2s;
  background: white;

  &[type='number'] {
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  &:focus {
    outline: none;
    border-color: ${darkerPlatinum};
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.09);
  }

  &:disabled {
    background-color: ${platinum};
  }
`;

export const Input = styled.input`
  ${styles};
`;

export const Textarea = styled.textarea`
  ${styles};
`;
