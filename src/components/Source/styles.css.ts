import { style } from "@vanilla-extract/css";

import { whiteSmoke } from "styles/colors";

export const hrStyle = style({
  margin: "20px0",
  border: "none",
  borderTop: `solid 2px ${whiteSmoke}`,
});

export const titleStyle = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "baseline",
});
