import React, { Fragment } from 'react';

import { Field, Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { FieldArray } from 'react-final-form-arrays';
import createDecorator from 'final-form-calculate';

import Button from '../Button';
import FormField from '../FormField';
import Input from '../Input';
import Source from '../Source';
import Text from '../Text';
import FirstPlayedField from '../FirstPlayedField';

import { Form as StyledForm } from './styles';
import { formatInteger, parseInteger, parseOptionalString } from '../utils';

const firstPlayedDecorator = createDecorator({
  field: 'firstPlayedMode',
  updates: {
    firstPlayed: (firstPlayedMode, { firstPlayed }) => {
      if (firstPlayedMode === 'date') {
        return firstPlayed && firstPlayed.year ? firstPlayed : { year: undefined, month: undefined, day: undefined };
      } else if (firstPlayedMode === 'timestamp') {
        return firstPlayed && firstPlayed.timestamp ? firstPlayed : { timestamp: undefined };
      } else {
        return null;
      }
    }
  }
});

export default ({ data, error, isSubmitting, loading, submit, submitError }) => {
  const handleSubmit = async ({ sources, firstPlayedMode, ...rest }, { reset }) => {
    await submit({
      variables: {
        sources: sources.map(({ __typename, ...rest }) => rest),
        ...rest,
        firstPlayed: (() => {
          if (rest.firstPlayed) {
            const { __typename, ...firstPlayed } = rest.firstPlayed;
            return firstPlayed;
          } else {
            return rest.firstPlayed;
          }
        })()
      }
    });
    setTimeout(reset, 0);
  };

  if (loading) {
    return (
      <div>
        <Text color="grey">Loading...</Text>
      </div>
    );
  } else if (error) {
    return 'error';
  } else {
    let firstPlayed = null;
    if (data.album) {
      firstPlayed = data.album.firstPlayed;
    }
    const firstPlayedMode = firstPlayed === null ? 'unknown' : firstPlayed.year ? 'date' : 'timestamp';
    return (
      <StyledForm>
        <Form
          initialValues={{ firstPlayedMode, ...data.album }}
          decorators={[firstPlayedDecorator]}
          onSubmit={handleSubmit}
          mutators={{
            ...arrayMutators
          }}
          subscription={{}}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <FormField label="Title">
                <Field name="title">{({ input }) => <Input disabled={isSubmitting} {...input} />}</Field>
              </FormField>
              <FormField label="Artist">
                <Field name="artist">{({ input }) => <Input disabled={isSubmitting} {...input} />}</Field>
              </FormField>
              <FormField label="Year">
                <Field format={formatInteger} name="year" parse={parseInteger}>
                  {({ input }) => <Input disabled={isSubmitting} {...input} />}
                </Field>
              </FormField>
              <FirstPlayedField />
              <FormField label="Comments">
                <Field name="comments" parse={parseOptionalString}>
                  {({ input }) => <Input disabled={isSubmitting} multiline {...input} />}
                </Field>
              </FormField>
              <FieldArray name="sources">
                {({ fields }) => (
                  <Fragment>
                    {fields.map((name, i) => (
                      <Source key={i} disabled={isSubmitting} name={name} onRemove={() => fields.remove(i)} />
                    ))}
                    <Button onClick={() => fields.push({ location: 'APPLE_MUSIC' })} palette="secondary" size="small">
                      Add source
                    </Button>
                  </Fragment>
                )}
              </FieldArray>
              <Button type="submit" disabled={isSubmitting}>
                Submit
              </Button>
              {submitError && <Text color="vermilion">{submitError.message}</Text>}
            </form>
          )}
        </Form>
      </StyledForm>
    );
  }
};
