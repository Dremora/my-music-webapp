import styled from 'styled-components';

import { platinum, darkPlatinum, darkerPlatinum } from 'styles/colors';
import { base } from 'styles/fonts';

export default styled.select`
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
  border-radius: 0;
  width: auto;
  appearance: none;

  &:focus {
    outline: none;
    border-color: ${darkerPlatinum};
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.09);
  }

  &:disabled {
    background-color: ${platinum};
  }
`;
