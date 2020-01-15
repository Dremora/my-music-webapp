import React from 'react';
import { useRouter } from 'next/router';
import { useQuery, useMutation } from '@apollo/react-hooks';

import AlbumForm from 'components/AlbumForm';
import { GetAlbum, GetAlbumVariables } from 'queries/GetAlbum/types/GetAlbum';
import { UpdateAlbum, UpdateAlbumVariables } from 'mutations/UpdateAlbum/types/UpdateAlbum';

import GET_ALBUM from 'queries/GetAlbum';
import UPDATE_ALBUM from 'mutations/UpdateAlbum';
import { useLogin } from 'data/login';

const AlbumPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { isLoggedIn } = useLogin();

  const { data, error, loading } = useQuery<GetAlbum, GetAlbumVariables>(GET_ALBUM, { variables: { id } });
  const [submit, { loading: isSubmitting, error: submitError }] = useMutation<UpdateAlbum, UpdateAlbumVariables>(
    UPDATE_ALBUM
  );

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
