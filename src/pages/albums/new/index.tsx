import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useState } from "react";

import AlbumForm from "components/AlbumForm";
import Text from "components/Text";
import { useLogin } from "data/login";
import CREATE_ALBUM from "mutations/CreateAlbum";
import {
  CreateAlbum,
  CreateAlbumVariables,
} from "mutations/CreateAlbum/types/CreateAlbum";

const createEmptyAlbum = (): CreateAlbumVariables => ({
  title: "",
  artist: "",
  firstPlayed: { timestamp: Math.floor(new Date().getTime() / 1000) },
  sources: [],
});

const NewAlbumPage = () => {
  const router = useRouter();
  const { isLoggedIn } = useLogin();
  const [emptyAlbum] = useState(createEmptyAlbum);

  const [submit, { data, error, loading }] = useMutation<
    CreateAlbum,
    CreateAlbumVariables
  >(CREATE_ALBUM, {
    onCompleted: ({ createAlbum: { id } }) =>
      router.replace("/albums/[id]", `/albums/${id}`),
  });

  if (!isLoggedIn) {
    return null;
  }

  if (loading) {
    return (
      <div>
        <Text color="grey">Loading...</Text>
      </div>
    );
  } else if (error || !data) {
    return <span>error</span>;
  }

  return (
    <AlbumForm
      initialValues={data?.createAlbum ? data.createAlbum : emptyAlbum}
      isNew={!data}
      isSubmitting={loading}
      onSubmit={submit}
      submitError={error}
    />
  );
};

export default NewAlbumPage;
