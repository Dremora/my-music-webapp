import { ApolloError } from "@apollo/client";
import { AnimatePresence, motion } from "framer-motion";
import { ExecutionResult } from "graphql";
import { useCallback, useState } from "react";

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
import {
  GetAlbum_album,
  GetAlbum_album_sources,
} from "queries/GetAlbum/types/GetAlbum";
import { FirstPlayedInput, Location, NewSourceInput } from "types/graphql";
import { formatInteger, parseInteger, parseOptionalString } from "utils";

import { buttonsStyle, formStyle } from "./styles.css";

interface Props {
  initialValues: CreateAlbumVariables | GetAlbum_album;
  isNew?: boolean;
  isSubmitting: boolean;
  onSubmit:
    | ((data: {
        variables?: CreateAlbumVariables;
      }) => Promise<ExecutionResult<CreateAlbum>>)
    | ((data: {
        variables?: UpdateAlbumVariables;
      }) => Promise<ExecutionResult<UpdateAlbum>>);
  submitError?: ApolloError;
}

type AlbumSource = NewSourceInput | GetAlbum_album_sources;

type FormData = Omit<CreateAlbumVariables, "sources"> & {
  id?: string | undefined;
  firstPlayed?:
    | (FirstPlayedInput & {
        __typename?: string;
      })
    | null
    | undefined;
  sources: readonly (NewSourceInput & {
    readonly __typename?: string;
  })[];
};

const AlbumForm = ({
  initialValues,
  isNew,
  isSubmitting,
  onSubmit,
  submitError,
}: Props) => {
  const isFirstRender = useIsFirstRender();
  const [album, setAlbum] = useState<FormData>(initialValues);

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit({
      variables: {
        id: "id" in album ? album.id : undefined,
        title: album.title,
        artist: album.artist,
        comments: album.comments,
        year: album.year,
        sources: album.sources.map((source) => {
          if ("__typename" in source) {
            const { __typename, ...rest } = source;
            return rest;
          } else {
            return source;
          }
        }),
        firstPlayed: (() => {
          if (album.firstPlayed) {
            if ("__typename" in album.firstPlayed) {
              const { __typename, ...rest } = album.firstPlayed;
              return rest;
            } else {
              return album.firstPlayed;
            }
          } else {
            return album.firstPlayed;
          }
        })(),
      },
    });
  };

  const onSourceUpdate = useCallback(
    (index: number, source: AlbumSource) => {
      const sources = [...album.sources];
      sources[index] = source;
      setAlbum({ ...album, sources });
    },
    [album]
  );

  const onSourceRemove = useCallback(
    (index: number) => {
      const sources = [...album.sources];
      sources.splice(index, 1);
      setAlbum({ ...album, sources });
    },
    [album]
  );

  const onSourceAdd = useCallback(() => {
    setAlbum({
      ...album,
      sources: [...album.sources, { location: Location.APPLE_MUSIC }],
    });
  }, [album]);

  const onFirstPlayedChange = useCallback(
    (firstPlayed: FirstPlayedInput | null) => {
      setAlbum({ ...album, firstPlayed });
    },
    [album]
  );

  const onTitleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setAlbum({ ...album, title: e.target.value });
    },
    [album]
  );

  const onArtistChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setAlbum({ ...album, artist: e.target.value });
    },
    [album]
  );

  const onYearChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setAlbum({ ...album, year: parseInteger(e.target.value) });
    },
    [album]
  );

  const onCommentsChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setAlbum({ ...album, comments: parseOptionalString(e.target.value) });
    },
    [album]
  );

  return (
    <form className={formStyle} onSubmit={submitForm}>
      <Text color="grey" size="large" weight="bold">
        {isNew ? "Create album" : "Edit album"}
      </Text>
      <FormField label="Artist">
        <Input
          disabled={isSubmitting}
          onChange={onArtistChange}
          value={album.artist}
        />
      </FormField>
      <FormField label="Title">
        <Input
          disabled={isSubmitting}
          value={album.title}
          onChange={onTitleChange}
        />
      </FormField>
      <FormField label="Year">
        <Input
          disabled={isSubmitting}
          value={formatInteger(album.year ?? null)}
          onChange={onYearChange}
        />
      </FormField>
      <FirstPlayedField
        disabled={isSubmitting}
        value={album.firstPlayed}
        onChange={onFirstPlayedChange}
      />
      <FormField label="Comments">
        <Input
          multiline
          disabled={isSubmitting}
          value={album.comments ?? ""}
          onChange={onCommentsChange}
        />
      </FormField>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore https://github.com/framer/motion/pull/1573 */}
      <AnimatePresence>
        {album.sources.map((source, i) => (
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
              onRemove={onSourceRemove}
              onUpdate={onSourceUpdate}
              source={source}
            />
          </motion.div>
        ))}
      </AnimatePresence>
      <div className={buttonsStyle}>
        {/* eslint-disable-next-line react/jsx-no-bind */}
        <Button onClick={onSourceAdd} palette="link" size="small">
          Add source
        </Button>
        <Button disabled={isSubmitting} type="submit">
          Submit
        </Button>
      </div>
      {submitError && <Text color="vermilion">{submitError.message}</Text>}
    </form>
  );
};

export default AlbumForm;
