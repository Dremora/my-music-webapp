import { motion, transform } from "framer-motion";
import React, { memo, useCallback } from "react";

import { grey, lightGrey, lighterGrey } from "styles/colors";

import { barStyle, rootStyle } from "./styles.css";

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

  const onClickWithYear = useCallback(
    () => onClick && onClick(year),
    [onClick, year]
  );

  return (
    <motion.div
      className={rootStyle}
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
      <motion.div
        className={barStyle}
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
    </motion.div>
  );
};

export default memo(Year);
