import React, { useCallback, useState } from 'react';
import { Field, useField } from 'react-final-form';
import { AnimatePresence, motion } from 'framer-motion';

import Input from '../Input';
import Text from '../Text';

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
import { formatInteger, parseInteger } from '../utils';
import useIsFirstRender from '../../data/useIsFirstRender';

interface Props {}

export default (_: Props) => {
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
            name="firstPlayedMode"
            type="radio"
            checked={firstPlayedMode === 'timestamp'}
            value="timestamp"
            onChange={setMode}
          />
          <Text color="darkPlatinum">Timestamp</Text>
        </RadioLabel>
        <RadioLabel>
          <RadioInput
            name="firstPlayedMode"
            type="radio"
            checked={firstPlayedMode === 'date'}
            value="date"
            onChange={setMode}
          />
          <Text color="darkPlatinum">At a specific date</Text>
        </RadioLabel>
        <RadioLabel>
          <RadioInput
            name="firstPlayedMode"
            type="radio"
            checked={firstPlayedMode === 'unknown'}
            value="unknown"
            onChange={setMode}
          />
          <Text color="darkPlatinum">Unknown</Text>
        </RadioLabel>
      </RadioGroup>

      <motion.div
        initial={{ height: firstPlayedMode === 'unknown' ? 0 : 'auto' }}
        animate={{ height: firstPlayedMode === 'unknown' ? 0 : 'auto' }}
        transition={{ type: 'tween' }}
      >
        <AnimatePresence exitBeforeEnter>
          {firstPlayedMode !== 'unknown' && (
            <motion.div
              key={firstPlayedMode}
              initial={{ opacity: isFirstRender.current ? 1 : 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: 'tween', duration: 0.15 }}
            >
              {firstPlayedMode === 'timestamp' && (
                <DateInputContainer>
                  <Field name="firstPlayed.timestamp" format={formatInteger} parse={parseInteger}>
                    {({ input }) => <Input {...input} />}
                  </Field>
                </DateInputContainer>
              )}

              {firstPlayedMode === 'date' && (
                <DateInputContainer>
                  <YearInputField>
                    <Field name="firstPlayed.year" format={formatInteger} parse={parseInteger}>
                      {({ input }) => <Input {...input} type="number" placeholder="YYYY" />}
                    </Field>
                  </YearInputField>
                  <MonthDayField>
                    <Field name="firstPlayed.month" format={formatInteger} parse={parseInteger}>
                      {({ input }) => <Input {...input} type="number" placeholder="MM" />}
                    </Field>
                  </MonthDayField>
                  <MonthDayField>
                    <Field name="firstPlayed.day" format={formatInteger} parse={parseInteger}>
                      {({ input }) => <Input {...input} type="number" placeholder="DD" />}
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
