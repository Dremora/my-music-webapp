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
  data: app.get('album')
})

export default connect(mapStateToProps)(
  class Album extends Component {
    componentWillMount() {
      const { params: { id }, dispatch } = this.props;
      dispatch(getAlbum(id))
    }

    render() {
      console.log(this.props.data)
      if (this.props.data instanceof LoadingAlbum) {
        return <div>Loading...</div>
      } else {
        const album = this.props.data;
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
