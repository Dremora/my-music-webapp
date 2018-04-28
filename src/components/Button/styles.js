import styled, { css } from 'styled-components';

import { vermilion, darkPlatinum, darkerPlatinum, yellow, white } from '../../styles/colors';
import { base, medium } from '../../styles/fonts';

export default styled.button`
  border: none;
  display: block;
  font-weight: 700;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.09);

  ${props =>
    props.size === 'medium' &&
    css`
      padding: 7px 20px;
      ${medium};
    `};

  ${props =>
    props.size === 'small' &&
    css`
      padding: 3px 10px;
      ${base};
    `};

  ${props =>
    props.palette === 'primary' &&
    css`
      color: ${white};
      background-color: ${vermilion};
    `};

  ${props =>
    props.palette === 'secondary' &&
    css`
      color: ${darkPlatinum};
      background-color: ${yellow};
    `};

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
