// @flow

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const Form = reduxForm({ form: 'album' })(() => {
  return (
    <div>
      <label htmlFor="title">Title</label>
      <Field name="title" component="input" type="text" />
    </div>
  );
});

const GetAlbum = gql`
  query GetAlbum($id: BinaryId) {
    album(id: $id) {
      id, artist, title, year, firstPlayed
    }
  }
`;

const Album = props => {
  if (props.data.loading) {
    return <div>Loading...</div>
  } else if (!props.data.error) {
    const album = props.data.album;
    return (
      <div>
        ID: {album.id}
        <Form album={album}/>
      </div>
    );
  }
};

export default graphql(GetAlbum, {
  options: ({ params: { id } }) => ({ variables: { id } }),
})(Album);

