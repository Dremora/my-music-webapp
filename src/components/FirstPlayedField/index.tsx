import React from 'react';
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

interface Props {}

export default (_: Props) => (
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

    <Field name="firstPlayedMode" value="timestamp" type="radio">
      {({ input }) =>
        input.checked && (
          <DateInputContainer>
            <Field name="firstPlayed.timestamp" format={formatInteger} parse={parseInteger}>
              {({ input }) => <Input {...input} />}
            </Field>
          </DateInputContainer>
        )
      }
    </Field>

    <Field name="firstPlayedMode" value="date" type="radio">
      {({ input }) =>
        input.checked && (
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
        )
      }
    </Field>
    <Field name="firstPlayed">{() => null}</Field>
  </Container>
);
