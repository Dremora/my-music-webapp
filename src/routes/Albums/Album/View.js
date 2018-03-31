import React, { Fragment } from 'react';

import { Formik, Field, FieldArray, Form } from 'formik';

import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import Input from '../../../components/Input';
import Source from '../../../components/Source';
import Text from '../../../components/Text';

import { Form as StyledForm } from './styles';

export default ({ data, submit }) => {
  if (data.loading) {
    return (
      <div>
        <Text color="grey">Loading...</Text>
      </div>
    );
  } else if (!data.error) {
    return (
      <StyledForm>
        <Formik initialValues={data.album}>
          {({ isSubmitting, values }) => (
            <Form>
              <FormField label="Title">
                <Field name="title" render={({ field }) => <Input {...field} />} />
              </FormField>
              <FormField label="Artist">
                <Field name="artist" render={({ field }) => <Input {...field} />} />
              </FormField>
              <FormField label="Year">
                <Field name="year" render={({ field }) => <Input {...field} />} />
              </FormField>
              <FormField label="Comments">
                <Field name="comments" render={({ field }) => <Input multiline {...field} />} />
              </FormField>
              <FieldArray
                name="sources"
                render={({ remove, push }) => (
                  <Fragment>
                    {values.sources
                      ? values.sources.map((source, i) => <Source key={i} i={i} source={source} onRemove={remove} />)
                      : null}
                    <Button onClick={() => push({ location: 'APPLE_MUSIC' })}>Add source</Button>
                  </Fragment>
                )}
              />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </StyledForm>
    );
  }
};
