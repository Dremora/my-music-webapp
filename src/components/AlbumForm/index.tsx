import React from 'react';
import { motion } from 'framer-motion';
import { Field, Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { FieldArray } from 'react-final-form-arrays';
import { AnimatePresence } from 'framer-motion';
import { ApolloError } from 'apollo-client';
import { ExecutionResult } from 'graphql';

import { CreateAlbumVariables, CreateAlbum } from 'mutations/CreateAlbum/types/CreateAlbum';
import { UpdateAlbumVariables, UpdateAlbum } from 'mutations/UpdateAlbum/types/UpdateAlbum';
import { GetAlbum } from 'queries/GetAlbum/types/GetAlbum';
import useIsFirstRender from 'data/useIsFirstRender';

import Button from 'components/Button';
import FormField from 'components/FormField';
import Input from 'components/Input';
import Source from 'components/Source';
import Text from 'components/Text';
import FirstPlayedField from 'components/FirstPlayedField';
import { formatInteger, parseInteger, parseOptionalString } from 'utils';

import { Form as StyledForm, Buttons } from './styles';

interface Props {
  data?: { album: CreateAlbumVariables } | GetAlbum;
  error?: ApolloError;
  isNew?: boolean;
  isSubmitting: boolean;
  loading?: boolean;
  submit:
    | ((data: { variables?: CreateAlbumVariables }) => Promise<ExecutionResult<CreateAlbum>>)
    | ((data: { variables?: UpdateAlbumVariables }) => Promise<ExecutionResult<UpdateAlbum>>);
  submitError?: ApolloError;
}

const AlbumForm = ({ data, error, isNew, isSubmitting, loading, submit, submitError }: Props) => {
  const isFirstRender = useIsFirstRender();

  const handleSubmit = async (data, { reset }) => {
    await submit({
      variables: {
        id: data.id,
        title: data.title,
        artist: data.artist,
        comments: data.comments,
        year: data.year,
        sources: data.sources.map(({ __typename, ...rest }) => rest),
        firstPlayed: (() => {
          if (data.firstPlayed) {
            const { __typename, ...firstPlayed } = data.firstPlayed;
            return firstPlayed;
          } else {
            return data.firstPlayed;
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
  } else if (error || !data) {
    return <span>error</span>;
  } else {
    return (
      <Form
        initialValues={data.album}
        onSubmit={handleSubmit}
        mutators={{
          ...arrayMutators
        }}
        subscription={{}}
      >
        {({ handleSubmit }) => (
          <StyledForm onSubmit={handleSubmit}>
            <Text color="grey" weight="bold" size="large">
              {isNew ? 'Create album' : 'Edit album'}
            </Text>
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
                <>
                  <AnimatePresence>
                    {fields.map((name, i) => (
                      <motion.div
                        initial={{ height: isFirstRender.current ? 'auto' : 0 }}
                        style={{ overflow: 'hidden' }}
                        key={i}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ type: 'tween' }}
                      >
                        <Source index={i} disabled={isSubmitting} name={name} onRemove={fields.remove} />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  <Buttons>
                    <Button onClick={() => fields.push({ location: 'APPLE_MUSIC' })} palette="link" size="small">
                      Add source
                    </Button>
                    <Button type="submit" disabled={isSubmitting}>
                      Submit
                    </Button>
                  </Buttons>
                </>
              )}
            </FieldArray>
            {submitError && <Text color="vermilion">{submitError.message}</Text>}
          </StyledForm>
        )}
      </Form>
    );
  }
};

export default AlbumForm;
