import { AnimatePresence, m } from "framer-motion";
import { useCallback, useMemo, useState } from "react";
import { IBounds, useLayer } from "react-laag";

import Text from "components/Text";
import { AlbumPerYearCount } from "generated/graphql";

import { rootStyle } from "./styles.css";
import Year from "./Year";

const getMaxValue = (numbers: number[]): number =>
  numbers.length === 0
    ? 0
    : numbers.reduce((acc, value) => Math.max(acc, value), -Infinity);

const getMinValue = (numbers: number[]): number =>
  numbers.length === 0
    ? 0
    : numbers.reduce((acc, value) => Math.min(acc, value), Infinity);

const range = (start: number, stop: number): number[] =>
  Array.from({ length: stop - start + 1 }, (_, i) => start + i);

interface Props {
  data: ReadonlyArray<AlbumPerYearCount>;
  onYearClick?: (year: number) => void;
}

function YearsHistogram({ data, onYearClick }: Props) {
  const [selectedYear, setSelectedYear] = useState<number>();
  const [isOpen, setIsOpen] = useState(false);
  const [triggerBounds, setTriggerBounds] = useState<IBounds | null>(null);

  const { layerProps, renderLayer } = useLayer({
    isOpen,
    placement: "bottom-center",
    trigger: triggerBounds
      ? {
          getBounds: () => triggerBounds,
        }
      : undefined,
  });

  const dataWithYear = useMemo<typeof data>(
    () => data.filter(({ year }) => year !== 0),
    [data]
  );

  const counts = useMemo<number[]>(
    () => dataWithYear.map(({ count }) => count),
    [dataWithYear]
  );

  const maxCount = useMemo(() => getMaxValue(counts), [counts]);

  const yearMap = useMemo(() => {
    const map: { [key: number]: number } = {};
    dataWithYear.forEach(({ count, year }) => (map[year] = count));
    return map;
  }, [dataWithYear]);

  const years = dataWithYear.map(({ year }) => year);

  const yearsWithoutGaps = useMemo(
    () => range(getMinValue(years), getMaxValue(years)),
    [years]
  );

  const showYear = useCallback(
    (year: number) => (e: MouseEvent) => {
      setSelectedYear(year);

      if (e.currentTarget instanceof HTMLElement) {
        const currentTarget = e.currentTarget;
        setTriggerBounds(currentTarget.getBoundingClientRect());
        setIsOpen(true);
      }
    },
    []
  );

  const hideYear = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <div className={rootStyle}>
        {yearsWithoutGaps.map((year) => (
          <Year
            count={yearMap[year] || 0}
            key={year}
            maxCount={maxCount}
            onClick={onYearClick}
            onHoverEnd={hideYear}
            onHoverStart={showYear}
            year={year}
          />
        ))}
      </div>

      {renderLayer(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore https://github.com/framer/motion/pull/1573
        <AnimatePresence>
          {isOpen && layerProps.style.left ? (
            <m.div
              animate={{ opacity: 1, left: layerProps.style.left }}
              exit={{ opacity: 0 }}
              initial={{ opacity: 0, left: layerProps.style.left }}
              key="year_popup"
              ref={layerProps.ref}
              style={layerProps.style}
              transition={{ ease: "easeOut", duration: 0.1 }}
            >
              <Text color="grey" weight="bold">
                {selectedYear}
              </Text>
            </m.div>
          ) : (
            <div
              key="year_popup_invisible"
              ref={layerProps.ref}
              style={{ visibility: "hidden", ...layerProps.style }}
            >
              <Text color="grey" weight="bold">
                {selectedYear}
              </Text>
            </div>
          )}
        </AnimatePresence>
      )}
    </>
  );
}

export default YearsHistogram;
