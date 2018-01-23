import React, { Fragment } from 'react';

import { Formik, Field, FieldArray, Form } from 'formik';

import Input from '../../../components/Input';
import Textarea from '../../../components/Textarea';
import Source from '../../../components/Source';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

export default ({ data, submit }) => {
  if (data.loading) {
    return <div>Loading...</div>;
  } else if (!data.error) {
    return (
      <Formik initialValues={data.album}>
        {({ isSubmitting, values }) => (
          <Form>
            <FormField label="Title">
              <Field placeholder="Title" name="title" component={Input} />
            </FormField>
            <FormField label="Artist">
              <Field placeholder="Artist" name="artist" component={Input} />
            </FormField>
            <FormField label="Year">
              <Field placeholder="Year" name="year" component={Input} />
            </FormField>
            <FormField label="Comments">
              <Field placeholder="Comments" name="comments" component={Textarea} />
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
    );
  }
};
