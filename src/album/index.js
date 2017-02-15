import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { getAlbum } from '../actions';

const Form = reduxForm({ form: 'album' })(() => {
  return (
    <div>
      <label htmlFor="title">Title</label>
      <Field name="title" component="input" type="text" />
    </div>
  );
});

export default connect()(
  class Album extends Component {
    componentWillReceiveProps({ id, dispatch }) {
      dispatch(getAlbum(id));
    }

    render() {
      const params = this.props.params;
      return (
        <div>
           ID: {params.id}
          <Form />
        </div>
      );
    }
  }
)
