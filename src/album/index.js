// @flow

import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { getAlbum } from '../actions';
import { LoadingAlbum } from '../records';

const Form = reduxForm({ form: 'album' })(() => {
  return (
    <div>
      <label htmlFor="title">Title</label>
      <Field name="title" component="input" type="text" />
    </div>
  );
});

const mapStateToProps = ({ app }) => ({
  album: app.album
})

export default connect(mapStateToProps)(
  class Album extends Component {
    componentWillMount() {
      const { params: { id }, dispatch } = this.props;
      dispatch(getAlbum(id))
    }

    render() {
      if (this.props.album instanceof LoadingAlbum) {
        return <div>Loading...</div>
      } else {
        const album = this.props.album;
        return (
          <div>
            ID: {album.id}
            <Form album={album}/>
          </div>
        );
      }
    }
  }
);
