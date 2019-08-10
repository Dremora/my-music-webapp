import React from 'react';

import { Query, Mutation } from '@apollo/react-components';

import AlbumForm from '../../../components/AlbumForm';

import GetAlbum from './query';
import UpdateAlbum from './mutation';

export default ({
  match: {
    params: { id }
  }
}) => (
  <Query variables={{ id }} query={GetAlbum}>
    {({ data, error, loading }) => (
      <Mutation mutation={UpdateAlbum}>
        {(submit, { loading: isSubmitting, error: submitError }) => (
          <AlbumForm
            data={data}
            error={error}
            isSubmitting={isSubmitting}
            loading={loading}
            submit={submit}
            submitError={submitError}
          />
        )}
      </Mutation>
    )}
  </Query>
);
