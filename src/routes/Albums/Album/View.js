import React from 'react';

import { Formik, Field, FieldArray, Form } from 'formik';

import Input from '../../../components/Input';
import Textarea from '../../../components/Textarea';
import Source from '../../../components/Source';

export default ({ data, submit }) => {
  if (data.loading) {
    return <div>Loading...</div>;
  } else if (!data.error) {
    const album = data.album;
    return (
      <Formik initialValues={data.album}>
        {({ isSubmitting, values }) => (
          <Form>
            <Field placeholder="Title" name="title" component={Input} />
            <Field placeholder="Artist" name="artist" component={Input} />
            <Field placeholder="Year" name="year" component={Input} />
            <Field placeholder="Comments" name="comments" component={Textarea} />
            <FieldArray
              name="sources"
              render={({ remove, push }) => (
                <div>
                  {values.sources
                    ? values.sources.map((source, i) => <Source key={i} i={i} source={source} onRemove={remove} />)
                    : null}
                  <button onClick={() => push({ location: 'APPLE_MUSIC' })} type="button">
                    Add source
                  </button>
                </div>
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
