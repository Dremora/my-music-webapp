import React, { useEffect, useRef } from 'react';
import { Field } from 'react-final-form';

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
import { AnimatePresence, motion } from 'framer-motion';

interface Props {}

export default (_: Props) => {
  const isFirstRender = useRef(true);

  useEffect(() => {
    isFirstRender.current = false;
  }, []);
  return (
    <Container>
      <Label>
        <Text color="darkPlatinum" weight="bold">
          First played
        </Text>
      </Label>
      <RadioGroup>
        <Field name="firstPlayedMode" value="timestamp" type="radio">
          {({ input }) => (
            <>
              <RadioLabel>
                <RadioInput type="radio" {...input} /> <Text color="darkPlatinum">Timestamp</Text>
              </RadioLabel>
            </>
          )}
        </Field>
        <Field name="firstPlayedMode" value="date" type="radio">
          {({ input }) => (
            <>
              <RadioLabel>
                <RadioInput type="radio" {...input} /> <Text color="darkPlatinum">At a specific date</Text>
              </RadioLabel>
            </>
          )}
        </Field>
        <Field name="firstPlayedMode" value="unknown" type="radio">
          {({ input }) => (
            <RadioLabel>
              <RadioInput type="radio" {...input} /> <Text color="darkPlatinum">Unknown</Text>
            </RadioLabel>
          )}
        </Field>
      </RadioGroup>

      <Field name="firstPlayedMode">
        {({ input: { value } }) => (
          <motion.div
            initial={{ height: value === 'unknown' ? 0 : 'auto' }}
            animate={{ height: value === 'unknown' ? 0 : 'auto' }}
            transition={{ type: 'tween' }}
          >
            <AnimatePresence exitBeforeEnter>
              {value !== 'unknown' && (
                <motion.div
                  key={value}
                  initial={{ opacity: isFirstRender.current ? 1 : 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: 'tween', duration: 0.15 }}
                >
                  {value === 'timestamp' && (
                    <DateInputContainer>
                      <Field name="firstPlayed.timestamp" format={formatInteger} parse={parseInteger}>
                        {({ input }) => <Input {...input} />}
                      </Field>
                    </DateInputContainer>
                  )}

                  {value === 'date' && (
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
        )}
      </Field>
    </Container>
  );
};
