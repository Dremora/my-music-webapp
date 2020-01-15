import styled, { css } from 'styled-components';

import { vermilion, darkerPlatinum, white, grey, blue, darkerVermilion } from 'styles/colors';
import { base, medium } from 'styles/fonts';

interface Props {
  size: 'medium' | 'small';
  palette: 'primary' | 'secondary' | 'link';
  full?: boolean;
}

export default styled.button<Props>`
  border: none;
  display: block;
  appearance: none;

  ${props =>
    props.size === 'medium' &&
    props.palette !== 'link' &&
    css`
      padding: 7px 20px;
      ${medium};
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
    `};

  ${props =>
    props.size === 'small' &&
    props.palette !== 'link' &&
    css`
      padding: 3px 10px;
      ${base};
      font-weight: 700;
    `};

  ${props =>
    props.palette === 'primary' &&
    css`
      color: ${white};
      background-color: ${darkerVermilion};
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.09);
      transition: 0.1s;

      &:hover:not(:disabled) {
        background-color: ${vermilion};
      }
    `};

  ${props =>
    props.palette === 'secondary' &&
    css`
      color: ${white};
      background-color: ${grey};
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.09);
    `};

  ${props =>
    props.palette === 'link' &&
    css`
      color: ${blue};
      ${base};
      padding: 0;
      font-weight: 700;

      &:hover {
        text-decoration: underline;
      }
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
