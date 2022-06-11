import * as colors from "styles/colors.css";

import { textStyle } from "./styles.css";

type Color = keyof typeof colors;

interface Props {
  children: React.ReactNode;
  color: Color;
  size?: "small" | "base" | "medium" | "large";
  weight?: "normal" | "bold";
}

const Text = ({ children, color, size, weight }: Props) => (
  <span className={textStyle({ color, size, weight })}>{children}</span>
);

export default Text;
