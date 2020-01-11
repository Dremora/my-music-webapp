import React, { useCallback, memo } from 'react';
import { transform } from 'framer-motion';

import { grey, lightGrey, lighterGrey } from '../../../styles/colors';

import { Root, Bar } from './styles';

interface Props {
  year: number;
  count: number;
  maxCount: number;
  onHoverStart: (year: number) => (e: MouseEvent) => void;
  onHoverEnd: (e: MouseEvent) => void;
}

const Year = memo(({ year, count, maxCount, onHoverStart, onHoverEnd }: Props) => {
  const onHoverStartMemoized = useCallback(onHoverStart(year), [year]);

  return (
    <Root
      initial="initial"
      animate="animate"
      variants={{
        initial: { height: 0 },
        animate: {
          height: transform(count || 0, [0, maxCount], [0, 200])
        }
      }}
      transition={{ ease: 'easeOut' }}
      whileHover="hover"
      onHoverStart={onHoverStartMemoized}
      onHoverEnd={onHoverEnd}
    >
      <Bar
        variants={{
          animate: {
            backgroundColor: transform(count || 0, [0, maxCount], [lightGrey, lighterGrey])
          },
          hover: {
            backgroundColor: transform(count || 0, [0, maxCount], [lighterGrey, grey])
          }
        }}
      />
    </Root>
  );
});

export default Year;