import { css } from 'styled-components';

const common = css`
  font-family: 'Lato';
  font-weight: 400;
  font-style: normal;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
`;

export const h1 = css`
  ${common};
  font-size: 32px;
`;

export const large = css`
  ${common};
  font-size: 21px;
  font-weight: 400;
`;

export const medium = css`
  ${common};
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
`;

export const base = css`
  ${common};
  font-size: 16px;
  font-weight: 400;
`;

export const small = css`
  ${common};
  font-size: 12px;
  font-weight: 400;
`;
