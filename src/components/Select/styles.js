import styled from 'styled-components';
import { darken } from 'polished';

import { platinum } from '../../styles/colors';

export default styled.select`
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
  border-radius: 0;
  width: auto;
  appearance: none;

  &:focus {
    outline: none;
    border-color: ${darken(0.2, platinum)};
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.09);
  }
`;
