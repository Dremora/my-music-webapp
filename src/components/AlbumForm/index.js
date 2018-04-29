import React, { Fragment } from 'react';

import { Field, Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { FieldArray } from 'react-final-form-arrays';

import Button from '../Button';
import FormField from '../FormField';
import Input from '../Input';
import Source from '../Source';
import Text from '../Text';

import { Form as StyledForm } from './styles';
import { formatInteger, parseInteger } from '../utils';

export default ({ data, error, isSubmitting, loading, submit, submitError }) => {
  const handleSubmit = async ({ sources, ...rest }, { reset }) => {
    await submit({
      variables: {
        sources: sources.map(({ __typename, ...rest }) => rest),
        ...rest
      }
    });
    reset();
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
    return (
      <StyledForm>
        <Form
          initialValues={data.album}
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
              <FormField label="Comments">
                <Field name="comments">{({ input }) => <Input disabled={isSubmitting} multiline {...input} />}</Field>
              </FormField>
              <FieldArray name="sources">
                {({ fields }) => (
                  <Fragment>
                    {fields.map((name, i) => (
                      <Source key={i} disabled={isSubmitting} i={i} name={name} onRemove={() => fields.remove(i)} />
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
