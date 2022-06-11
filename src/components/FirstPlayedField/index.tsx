import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useState } from "react";

import Input from "components/Input";
import Text from "components/Text";
import useIsFirstRender from "data/useIsFirstRender";
import { FirstPlayedInput } from "types/graphql";
import { formatInteger, parseInteger } from "utils";

import {
  containerStyle,
  dateInputContainerStyle,
  labelStyle,
  monthDayFieldStyle,
  radioGroupStyle,
  radioInputStyle,
  radioLabelStyle,
  yearInputFieldStyle,
} from "./styles.css";

type Props = {
  disabled: boolean;
  onChange: (value: FirstPlayedInput | null) => void;
  value: FirstPlayedInput | null | undefined;
};

const FirstPlayedField = ({ disabled, onChange, value }: Props) => {
  const [firstPlayedMode, setFirstPlayedMode] = useState(() =>
    value === null || value === undefined
      ? "unknown"
      : "year" in value
      ? "date"
      : "timestamp"
  );

  const setMode = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const newMode = e.target.value;
      setFirstPlayedMode(newMode);

      if (newMode === "date") {
        onChange(
          value && value.year
            ? value
            : { year: undefined, month: undefined, day: undefined }
        );
      } else if (newMode === "timestamp") {
        onChange(value && value.timestamp ? value : { timestamp: undefined });
      } else {
        onChange(null);
      }
    },
    [onChange, value]
  );

  const isFirstRender = useIsFirstRender();

  const onTimestampChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const timestamp = parseInteger(e.target.value);
      onChange({ timestamp });
    },
    [onChange]
  );

  const onYearChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const year = parseInteger(e.target.value);
      onChange({ year });
    },
    [onChange]
  );

  const onMonthChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const month = parseInteger(e.target.value);
      onChange({ month });
    },
    [onChange]
  );

  const onDayChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const day = parseInteger(e.target.value);
      onChange({ day });
    },
    [onChange]
  );

  return (
    <div className={containerStyle}>
      <div className={labelStyle}>
        <Text color="darkPlatinum" weight="bold">
          First played {firstPlayedMode}
        </Text>
      </div>
      <div className={radioGroupStyle}>
        <label className={radioLabelStyle}>
          <input
            className={radioInputStyle}
            checked={firstPlayedMode === "timestamp"}
            disabled={disabled}
            name="firstPlayedMode"
            onChange={setMode}
            type="radio"
            value="timestamp"
          />
          <Text color="darkPlatinum">Timestamp</Text>
        </label>
        <label className={radioLabelStyle}>
          <input
            className={radioInputStyle}
            checked={firstPlayedMode === "date"}
            disabled={disabled}
            name="firstPlayedMode"
            onChange={setMode}
            type="radio"
            value="date"
          />
          <Text color="darkPlatinum">At a specific date</Text>
        </label>
        <label className={radioLabelStyle}>
          <input
            className={radioInputStyle}
            checked={firstPlayedMode === "unknown"}
            disabled={disabled}
            name="firstPlayedMode"
            onChange={setMode}
            type="radio"
            value="unknown"
          />
          <Text color="darkPlatinum">Unknown</Text>
        </label>
      </div>

      <motion.div
        animate={{ height: firstPlayedMode === "unknown" ? 0 : "auto" }}
        initial={{ height: firstPlayedMode === "unknown" ? 0 : "auto" }}
        transition={{ type: "tween" }}
      >
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore https://github.com/framer/motion/pull/1573 */}
        <AnimatePresence exitBeforeEnter>
          {firstPlayedMode !== "unknown" && (
            <motion.div
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              initial={{ opacity: isFirstRender ? 1 : 0 }}
              key={firstPlayedMode}
              transition={{ type: "tween", duration: 0.15 }}
            >
              {firstPlayedMode === "timestamp" && (
                <div className={dateInputContainerStyle}>
                  <Input
                    disabled={disabled}
                    value={formatInteger(value?.timestamp ?? null)}
                    onChange={onTimestampChange}
                  />
                </div>
              )}

              {firstPlayedMode === "date" && (
                <div className={dateInputContainerStyle}>
                  <div className={yearInputFieldStyle}>
                    <Input
                      disabled={disabled}
                      placeholder="YYYY"
                      type="number"
                      value={formatInteger(value?.year ?? null)}
                      onChange={onYearChange}
                    />
                  </div>
                  <div className={monthDayFieldStyle}>
                    <Input
                      disabled={disabled}
                      placeholder="MM"
                      type="number"
                      value={formatInteger(value?.month ?? null)}
                      onChange={onMonthChange}
                    />
                  </div>
                  <div className={monthDayFieldStyle}>
                    <Input
                      disabled={disabled}
                      placeholder="DD"
                      type="number"
                      value={formatInteger(value?.day ?? null)}
                      onChange={onDayChange}
                    />
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default FirstPlayedField;
