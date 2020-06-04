import { ExecutionResult } from "@apollo/react-common/lib/types/types";
import { ApolloError } from "apollo-client";
import arrayMutators from "final-form-arrays";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Field, Form } from "react-final-form";
import { FieldArray } from "react-final-form-arrays";

import Button from "components/Button";
import FirstPlayedField from "components/FirstPlayedField";
import FormField from "components/FormField";
import Input from "components/Input";
import Source from "components/Source";
import Text from "components/Text";
import useIsFirstRender from "data/useIsFirstRender";
import {
  CreateAlbum,
  CreateAlbumVariables,
} from "mutations/CreateAlbum/types/CreateAlbum";
import {
  UpdateAlbum,
  UpdateAlbumVariables,
} from "mutations/UpdateAlbum/types/UpdateAlbum";
import { GetAlbum } from "queries/GetAlbum/types/GetAlbum";
import { FirstPlayedInput, Location } from "types/graphql";
import { formatInteger, parseInteger, parseOptionalString } from "utils";

import { Buttons, Form as StyledForm } from "./styles";

interface Props {
  data?: { album: CreateAlbumVariables } | GetAlbum;
  error?: ApolloError;
  isNew?: boolean;
  isSubmitting: boolean;
  loading?: boolean;
  onSubmit:
    | ((data: {
        variables?: CreateAlbumVariables;
      }) => Promise<ExecutionResult<CreateAlbum>>)
    | ((data: {
        variables?: UpdateAlbumVariables;
      }) => Promise<ExecutionResult<UpdateAlbum>>);
  submitError?: ApolloError;
}

type FormData = {
  id: string;
  title: string;
  artist: string;
  comments: string | null | undefined;
  year: number | null | undefined;
  firstPlayed:
    | (FirstPlayedInput & {
        __typename?: string;
      })
    | null;
  sources: readonly {
    readonly __typename?: string;
    readonly accurateRip?: string | null;
    readonly comments?: string | null;
    readonly cueIssues?: string | null;
    readonly discs?: number | null;
    readonly download?: string | null;
    readonly edition?: string | null;
    readonly format?: string | null;
    readonly id?: string | null;
    readonly location: Location;
    readonly mbid?: string | null;
    readonly tagIssues?: string | null;
  }[];
};

const AlbumForm = ({
  data,
  error,
  isNew,
  isSubmitting,
  loading,
  onSubmit,
  submitError,
}: Props) => {
  const isFirstRender = useIsFirstRender();

  const submitForm = async (
    formData: FormData,
    { reset }: { reset: () => void }
  ) => {
    await onSubmit({
      variables: {
        id: formData.id,
        title: formData.title,
        artist: formData.artist,
        comments: formData.comments,
        year: formData.year,
        sources: formData.sources.map(({ __typename, ...rest }) => rest),
        firstPlayed: (() => {
          if (formData.firstPlayed) {
            const { __typename, ...firstPlayed } = formData.firstPlayed;
            return firstPlayed;
          } else {
            return formData.firstPlayed;
          }
        })(),
      },
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
        mutators={{
          ...arrayMutators,
        }}
        onSubmit={submitForm}
        subscription={{}}
      >
        {({ handleSubmit }) => (
          <StyledForm onSubmit={handleSubmit}>
            <Text color="grey" size="large" weight="bold">
              {isNew ? "Create album" : "Edit album"}
            </Text>
            <FormField label="Title">
              <Field name="title">
                {({ input }) => <Input disabled={isSubmitting} {...input} />}
              </Field>
            </FormField>
            <FormField label="Artist">
              <Field name="artist">
                {({ input }) => <Input disabled={isSubmitting} {...input} />}
              </Field>
            </FormField>
            <FormField label="Year">
              <Field format={formatInteger} name="year" parse={parseInteger}>
                {({ input }) => <Input disabled={isSubmitting} {...input} />}
              </Field>
            </FormField>
            <FirstPlayedField />
            <FormField label="Comments">
              <Field name="comments" parse={parseOptionalString}>
                {({ input }) => (
                  <Input disabled={isSubmitting} multiline {...input} />
                )}
              </Field>
            </FormField>
            <FieldArray name="sources">
              {({ fields }) => (
                <>
                  <AnimatePresence>
                    {fields.map((name, i) => (
                      <motion.div
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        initial={{ height: isFirstRender ? "auto" : 0 }}
                        // eslint-disable-next-line react/no-array-index-key
                        key={i}
                        style={{ overflow: "hidden" }}
                        transition={{ type: "tween" }}
                      >
                        <Source
                          disabled={isSubmitting}
                          index={i}
                          name={name}
                          onRemove={fields.remove}
                        />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  <Buttons>
                    {/* eslint-disable-next-line react/jsx-no-bind */}
                    <Button
                      onClick={() => fields.push({ location: "APPLE_MUSIC" })}
                      palette="link"
                      size="small"
                    >
                      Add source
                    </Button>
                    <Button disabled={isSubmitting} type="submit">
                      Submit
                    </Button>
                  </Buttons>
                </>
              )}
            </FieldArray>
            {submitError && (
              <Text color="vermilion">{submitError.message}</Text>
            )}
          </StyledForm>
        )}
      </Form>
    );
  }
};

export default AlbumForm;
