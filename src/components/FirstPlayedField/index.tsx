import React, { Fragment } from 'react';
import { Field } from 'react-final-form';

import Input from '../Input';
import Text from '../Text';

import { RadioGroup, RadioGroupLabel, DateInputContainer, YearInputField, MonthDayField } from './styles';
import { formatInteger, parseInteger } from '../utils';

interface Props {}

export default (_: Props) => (
  <RadioGroup>
    <RadioGroupLabel>
      <Text color="darkPlatinum">First played</Text>
    </RadioGroupLabel>
    <Field name="firstPlayedMode" value="timestamp" type="radio">
      {({ input }) => (
        <Fragment>
          <label>
            <input type="radio" {...input} /> <Text color="darkPlatinum">Timestamp</Text>
          </label>
          {input.checked && (
            <DateInputContainer>
              <Field name="firstPlayed.timestamp" format={formatInteger} parse={parseInteger}>
                {({ input }) => <Input {...input} />}
              </Field>
            </DateInputContainer>
          )}
        </Fragment>
      )}
    </Field>
    <Field name="firstPlayedMode" value="date" type="radio">
      {({ input }) => (
        <Fragment>
          <label>
            <input type="radio" {...input} /> <Text color="darkPlatinum">At a specific date</Text>
          </label>
          {input.checked && (
            <DateInputContainer>
              <YearInputField>
                <Field name="firstPlayed.year" format={formatInteger} parse={parseInteger}>
                  {({ input }) => <Input {...input} placeholder="YYYY" />}
                </Field>
              </YearInputField>
              <MonthDayField>
                <Field name="firstPlayed.month" format={formatInteger} parse={parseInteger}>
                  {({ input }) => <Input {...input} placeholder="MM" />}
                </Field>
              </MonthDayField>
              <MonthDayField>
                <Field name="firstPlayed.day" format={formatInteger} parse={parseInteger}>
                  {({ input }) => <Input {...input} placeholder="DD" />}
                </Field>
              </MonthDayField>
            </DateInputContainer>
          )}
        </Fragment>
      )}
    </Field>
    <Field name="firstPlayedMode" value="unknown" type="radio">
      {({ input }) => (
        <label>
          <input type="radio" {...input} /> <Text color="darkPlatinum">Unknown</Text>
        </label>
      )}
    </Field>
    <Field name="firstPlayed">{() => null}</Field>
  </RadioGroup>
);
