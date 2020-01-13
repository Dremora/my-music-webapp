import React from 'react';

import { useQuery, useMutation } from '@apollo/react-hooks';

import AlbumForm from '../../../components/AlbumForm';
import { GetAlbum, GetAlbumVariables } from './types/GetAlbum';
import { UpdateAlbum, UpdateAlbumVariables } from './types/UpdateAlbum';

import GET_ALBUM from './query';
import UPDATE_ALBUM from './mutation';
import { useLogin } from '../../../data/login';

const AlbumRoute = ({
  match: {
    params: { id }
  }
}) => {
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

export default AlbumRoute;
