import styled, { css } from 'styled-components';

import { vermilion, darkerPlatinum } from '../../styles/colors';
import { medium } from '../../styles/fonts';

export default styled.button`
  border: none;
  ${medium};
  padding: 7px 20px;
  display: block;
  font-family: 'Lato';
  font-weight: 700;
  color: white;
  background-color: ${vermilion};
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.09);

  ${props =>
    props.full &&
    css`
      width: 100%;
    `};
  ${props =>
    props.disabled
      ? css`
          background-color: ${darkerPlatinum};
        `
      : css`
          cursor: pointer;
        `};
`;
