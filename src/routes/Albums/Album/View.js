import React, { Fragment } from 'react';

import { Formik, Field, FieldArray, Form } from 'formik';

import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import Input from '../../../components/Input';
import Source from '../../../components/Source';
import Text from '../../../components/Text';

import { Form as StyledForm } from './styles';

export default ({ data, error, isSubmitting, loading, submit, submitError }) => {
  const handleSubmit = async ({ sources, ...rest }, { resetForm }) => {
    await submit({
      variables: {
        sources: sources.map(({ __typename, ...rest }) => rest),
        ...rest
      }
    });
    resetForm();
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
        <Formik initialValues={data.album} onSubmit={handleSubmit}>
          {({ values }) => (
            <Form>
              <FormField label="Title">
                <Field name="title" render={({ field }) => <Input disabled={isSubmitting} {...field} />} />
              </FormField>
              <FormField label="Artist">
                <Field name="artist" render={({ field }) => <Input disabled={isSubmitting} {...field} />} />
              </FormField>
              <FormField label="Year">
                <Field name="year" render={({ field }) => <Input disabled={isSubmitting} {...field} />} />
              </FormField>
              <FormField label="Comments">
                <Field name="comments" render={({ field }) => <Input disabled={isSubmitting} multiline {...field} />} />
              </FormField>
              <FieldArray
                name="sources"
                render={({ remove, push }) => (
                  <Fragment>
                    {values.sources
                      ? values.sources.map((source, i) => (
                          <Source key={i} disabled={isSubmitting} i={i} source={source} onRemove={remove} />
                        ))
                      : null}
                    <Button onClick={() => push({ location: 'APPLE_MUSIC' })}>Add source</Button>
                  </Fragment>
                )}
              />
              <Button type="submit" disabled={isSubmitting}>
                Submit
              </Button>
              {submitError && <Text color="vermilion">{submitError.message}</Text>}
            </Form>
          )}
        </Formik>
      </StyledForm>
    );
  }
};
