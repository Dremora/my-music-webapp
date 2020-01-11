import React from 'react';

import { useQuery, useMutation } from '@apollo/react-hooks';

import AlbumForm from '../../../components/AlbumForm';

import GetAlbum from './query';
import UpdateAlbum from './mutation';
import { useLogin } from '../../../data/login';

export default ({
  match: {
    params: { id }
  }
}) => {
  const { isLoggedIn } = useLogin();

  if (!isLoggedIn) {
    return null;
  }

  const { data, error, loading } = useQuery(GetAlbum, { variables: { id } });
  const [submit, { loading: isSubmitting, error: submitError }] = useMutation(UpdateAlbum);
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
