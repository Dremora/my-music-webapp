import styled, { css } from "styled-components";

import * as colors from "styles/colors";
import { base, large, medium, small } from "styles/fonts";

type Color = keyof typeof colors;

const weights = {
  normal: 400,
  bold: 700,
};

interface Props {
  color: Color;
  size: "small" | "base" | "medium" | "large";
  weight: "normal" | "bold";
}

export default styled.span<Props>`
  ${(props) => props.size === "small" && small};
  ${(props) => props.size === "base" && base};
  ${(props) => props.size === "medium" && medium};
  ${(props) => props.size === "large" && large};

  ${(props) =>
    props.color &&
    css`
      color: ${colors[props.color]};
    `};

  ${(props) =>
    props.weight &&
    css`
      font-weight: ${weights[props.weight]};
    `};
`;
