import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";

import AlbumForm from "components/AlbumForm";
import Text from "components/Text";
import { useLogin } from "data/login";
import UPDATE_ALBUM from "mutations/UpdateAlbum";
import {
  UpdateAlbum,
  UpdateAlbumVariables,
} from "mutations/UpdateAlbum/types/UpdateAlbum";
import GET_ALBUM from "queries/GetAlbum";
import { GetAlbum, GetAlbumVariables } from "queries/GetAlbum/types/GetAlbum";

const AlbumPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { isLoggedIn } = useLogin();

  const { data, error, loading } = useQuery<GetAlbum, GetAlbumVariables>(
    GET_ALBUM,
    { variables: { id }, skip: !id }
  );

  const [submit, { error: submitError, loading: isSubmitting }] = useMutation<
    UpdateAlbum,
    UpdateAlbumVariables
  >(UPDATE_ALBUM);

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
      initialValues={data?.album}
      isSubmitting={isSubmitting}
      onSubmit={submit}
      submitError={submitError}
    />
  );
};

export default AlbumPage;
