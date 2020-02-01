import { AnimatePresence, motion } from 'framer-motion';
import React, { useCallback, useState } from 'react';
import { Field, useField } from 'react-final-form';

import Input from 'components/Input';
import Text from 'components/Text';
import useIsFirstRender from 'data/useIsFirstRender';
import { formatInteger, parseInteger } from 'utils';

import {
  Container,
  Label,
  RadioGroup,
  RadioLabel,
  RadioInput,
  DateInputContainer,
  YearInputField,
  MonthDayField
} from './styles';

const FirstPlayedField = () => {
  const { input } = useField('firstPlayed');
  const { value } = input;

  const [firstPlayedMode, setFirstPlayedMode] = useState(() =>
    // TODO figure out why this can ever be ''
    value === '' || value === null || value === undefined ? 'unknown' : 'year' in value ? 'date' : 'timestamp'
  );

  const setMode = useCallback(
    e => {
      const newMode = e.target.value;
      setFirstPlayedMode(newMode);

      if (newMode === 'date') {
        input.onChange(value && value.year ? value : { year: undefined, month: undefined, day: undefined });
      } else if (newMode === 'timestamp') {
        input.onChange(value && value.timestamp ? value : { timestamp: undefined });
      } else {
        input.onChange(null);
      }
    },
    [input, value]
  );

  const isFirstRender = useIsFirstRender();

  return (
    <Container>
      <Label>
        <Text color="darkPlatinum" weight="bold">
          First played
        </Text>
      </Label>
      <RadioGroup>
        <RadioLabel>
          <RadioInput
            checked={firstPlayedMode === 'timestamp'}
            name="firstPlayedMode"
            onChange={setMode}
            type="radio"
            value="timestamp"
          />
          <Text color="darkPlatinum">Timestamp</Text>
        </RadioLabel>
        <RadioLabel>
          <RadioInput
            checked={firstPlayedMode === 'date'}
            name="firstPlayedMode"
            onChange={setMode}
            type="radio"
            value="date"
          />
          <Text color="darkPlatinum">At a specific date</Text>
        </RadioLabel>
        <RadioLabel>
          <RadioInput
            checked={firstPlayedMode === 'unknown'}
            name="firstPlayedMode"
            onChange={setMode}
            type="radio"
            value="unknown"
          />
          <Text color="darkPlatinum">Unknown</Text>
        </RadioLabel>
      </RadioGroup>

      <motion.div
        animate={{ height: firstPlayedMode === 'unknown' ? 0 : 'auto' }}
        initial={{ height: firstPlayedMode === 'unknown' ? 0 : 'auto' }}
        transition={{ type: 'tween' }}
      >
        <AnimatePresence exitBeforeEnter>
          {firstPlayedMode !== 'unknown' && (
            <motion.div
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              initial={{ opacity: isFirstRender ? 1 : 0 }}
              key={firstPlayedMode}
              transition={{ type: 'tween', duration: 0.15 }}
            >
              {firstPlayedMode === 'timestamp' && (
                <DateInputContainer>
                  <Field format={formatInteger} name="firstPlayed.timestamp" parse={parseInteger}>
                    {({ input: firstPlayedInput }) => <Input {...firstPlayedInput} />}
                  </Field>
                </DateInputContainer>
              )}

              {firstPlayedMode === 'date' && (
                <DateInputContainer>
                  <YearInputField>
                    <Field format={formatInteger} name="firstPlayed.year" parse={parseInteger}>
                      {({ input: firstPlayedInput }) => (
                        <Input {...firstPlayedInput} placeholder="YYYY" type="number" />
                      )}
                    </Field>
                  </YearInputField>
                  <MonthDayField>
                    <Field format={formatInteger} name="firstPlayed.month" parse={parseInteger}>
                      {({ input: firstPlayedInput }) => <Input {...firstPlayedInput} placeholder="MM" type="number" />}
                    </Field>
                  </MonthDayField>
                  <MonthDayField>
                    <Field format={formatInteger} name="firstPlayed.day" parse={parseInteger}>
                      {({ input: firstPlayedInput }) => <Input {...firstPlayedInput} placeholder="DD" type="number" />}
                    </Field>
                  </MonthDayField>
                </DateInputContainer>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Container>
  );
};

export default FirstPlayedField;
