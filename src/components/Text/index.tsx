import React from "react";

import * as colors from "styles/colors";

import StyledText from "./styles";

type Color = keyof typeof colors;

interface Props {
  children: React.ReactNode;
  color: Color;
  size?: "small" | "base" | "medium" | "large";
  weight?: "normal" | "bold";
}

const Text = ({ children, color, size = "base", weight = "normal" }: Props) => (
  <StyledText color={color} size={size} weight={weight}>
    {children}
  </StyledText>
);

export default Text;
