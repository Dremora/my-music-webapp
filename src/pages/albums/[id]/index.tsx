import { useMutation, useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import React from "react";

import AlbumForm from "components/AlbumForm";
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
    { variables: { id } }
  );

  const [submit, { error: submitError, loading: isSubmitting }] = useMutation<
    UpdateAlbum,
    UpdateAlbumVariables
  >(UPDATE_ALBUM);

  if (!isLoggedIn) {
    return null;
  }

  return (
    <AlbumForm
      data={data}
      error={error}
      isSubmitting={isSubmitting}
      loading={loading}
      submit={submit}
      submitError={submitError}
    />
  );
};

export default AlbumPage;
