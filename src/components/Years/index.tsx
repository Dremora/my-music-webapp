import React, { useMemo, useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useToggleLayer } from 'react-laag';

import Text from '../../components/Text';
import Year from './Year';
import { AlbumPerYearCount_albumPerYearCount } from '../../routes/Years/types/AlbumPerYearCount';

import { Root } from './styles';

const getMaxValue = (numbers: number[]): number =>
  numbers.length === 0 ? 0 : numbers.reduce((acc, value) => Math.max(acc, value), numbers[0]);

const getMinValue = (numbers: number[]): number =>
  numbers.length === 0 ? 0 : numbers.reduce((acc, value) => Math.min(acc, value), numbers[0]);

const range = (start: number, stop: number): number[] => Array.from({ length: stop - start + 1 }, (_, i) => start + i);

interface Props {
  data: ReadonlyArray<AlbumPerYearCount_albumPerYearCount>;
}

const Years = ({ data }: Props) => {
  const [selectedYear, setSelectedYear] = useState<number>();
  const [yearElement, toggleYearLayerProps] = useToggleLayer(
    ({ isOpen, layerProps }) => (
      <AnimatePresence>
        {isOpen ? (
          layerProps.style.left ? (
            <motion.div
              key="year_popup"
              initial={{ opacity: 0, left: layerProps.style.left }}
              ref={layerProps.ref}
              style={layerProps.style}
              animate={{ opacity: 1, left: layerProps.style.left }}
              transition={{ ease: 'easeOut', duration: 0.1 }}
              exit={{ opacity: 0 }}
            >
              <Text color="grey" weight="semiBold">
                {selectedYear}
              </Text>
            </motion.div>
          ) : (
            <div key="year_popup_invisible" ref={layerProps.ref} style={{ visibility: 'hidden', ...layerProps.style }}>
              <Text color="grey" weight="semiBold">
                {selectedYear}
              </Text>
            </div>
          )
        ) : null}
      </AnimatePresence>
    ),
    {
      placement: {
        anchor: 'BOTTOM_CENTER'
      }
    }
  );

  const dataWithYear = useMemo<typeof data>(() => data.filter(({ year }) => year !== 0), [data]);

  const counts = useMemo<number[]>(() => dataWithYear.map(({ count }) => count), [dataWithYear]);
  const maxCount = useMemo(() => getMaxValue(counts), [counts]);

  const yearMap = useMemo(() => {
    const map: { [key: number]: number } = {};
    dataWithYear.forEach(({ year, count }) => (map[year] = count));
    return map;
  }, [dataWithYear]);

  const years = dataWithYear.map(({ year }) => year);

  const yearsWithoutGaps = useMemo(() => range(getMinValue(years), getMaxValue(years)), [years]);

  const showYear = useCallback(
    (year: number) => (e: MouseEvent) => {
      setSelectedYear(year);
      const currentTarget = e.currentTarget as HTMLElement;
      const clientRect = () => currentTarget.getBoundingClientRect();
      toggleYearLayerProps.open({ clientRect, target: currentTarget });
    },
    []
  );

  const hideYear = useCallback((e: MouseEvent) => {
    toggleYearLayerProps.close();
  }, []);

  return (
    <>
      <Root>
        {yearsWithoutGaps.map(year => (
          <Year
            year={year}
            key={year}
            maxCount={maxCount}
            count={yearMap[year] || 0}
            onHoverStart={showYear}
            onHoverEnd={hideYear}
          />
        ))}
      </Root>
      {yearElement}
    </>
  );
};

export default Years;
