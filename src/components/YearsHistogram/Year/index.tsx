import { transform } from "framer-motion";
import React, { memo, useCallback } from "react";

import { grey, lightGrey, lighterGrey } from "styles/colors";

import { Bar, Root } from "./styles";

interface Props {
  year: number;
  count: number;
  maxCount: number;
  onHoverStart: (year: number) => (e: MouseEvent) => void;
  onHoverEnd: (e: MouseEvent) => void;
  onClick?: (year: number) => void;
}

const Year = ({
  count,
  maxCount,
  onClick,
  onHoverEnd,
  onHoverStart,
  year,
}: Props) => {
  const onHoverStartMemoized = useCallback(
    (e: MouseEvent) => onHoverStart(year)(e),
    [onHoverStart, year]
  );

  const onClickWithYear = useCallback(() => onClick && onClick(year), [
    onClick,
    year,
  ]);

  return (
    <Root
      animate="animate"
      initial="initial"
      onClick={onClickWithYear}
      onHoverEnd={onHoverEnd}
      onHoverStart={onHoverStartMemoized}
      transition={{ ease: "easeOut" }}
      variants={{
        initial: { height: 0 },
        animate: {
          height: transform(count || 0, [0, maxCount], [0, 200]),
        },
      }}
      whileHover="hover"
    >
      <Bar
        variants={{
          animate: {
            backgroundColor: transform(
              count || 0,
              [0, maxCount],
              [lightGrey, lighterGrey]
            ),
          },
          hover: {
            backgroundColor: transform(
              count || 0,
              [0, maxCount],
              [lighterGrey, grey]
            ),
          },
        }}
      />
    </Root>
  );
};

export default memo(Year);
