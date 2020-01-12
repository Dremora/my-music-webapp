import React from 'react';
import { motion } from 'framer-motion';
import { Field, Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { FieldArray } from 'react-final-form-arrays';
import createDecorator from 'final-form-calculate';
import { AnimatePresence } from 'framer-motion';
import { ApolloError } from 'apollo-client';
import { ExecutionResult } from 'graphql';

import { CreateAlbumVariables, CreateAlbum } from '../../routes/Albums/NewAlbum/types/CreateAlbum';
import { UpdateAlbumVariables, UpdateAlbum } from '../../routes/Albums/Album/types/UpdateAlbum';

import { GetAlbum } from '../../routes/Albums/Album/types/GetAlbum';
import useIsFirstRender from '../../data/useIsFirstRender';
import Button from '../Button';
import FormField from '../FormField';
import Input from '../Input';
import Source from '../Source';
import Text from '../Text';
import FirstPlayedField from '../FirstPlayedField';

import { Form as StyledForm, Buttons } from './styles';
import { formatInteger, parseInteger, parseOptionalString } from '../utils';

const firstPlayedDecorator = createDecorator({
  field: 'firstPlayedMode',
  updates: {
    firstPlayed: (firstPlayedMode, { firstPlayed }: any) => {
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
    let firstPlayed = data.album ? data.album.firstPlayed : null;
    const firstPlayedMode =
      firstPlayed === null || firstPlayed === undefined ? 'unknown' : 'year' in firstPlayed ? 'date' : 'timestamp';
    return (
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
                        initial={{ height: isFirstRender ? 'auto' : 0 }}
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
