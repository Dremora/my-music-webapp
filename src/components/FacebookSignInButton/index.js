import React, { Component } from 'react';
import { connect } from 'react-redux';
import { oAuthSignIn, signOut } from 'redux-auth';

export default connect(({ auth }) => ({ auth }))(
  class FacebookSignInButton extends Component {
    signIn = () => {
      this.props.dispatch(oAuthSignIn({ provider: 'facebook' }));
    };

    signOut = () => {
      this.props.dispatch(signOut(this.endpoint()));
    };

    endpoint() {
      return (
        this.props.auth.getIn(['configure', 'currentEndpointKey']) ||
        this.props.auth.getIn(['configure', 'defaultEndpointKey'])
      );
    }

    render() {
      const { auth } = this.props;
      const firstLoading = auth.getIn(['authentication', 'loading']);
      const loading = auth.getIn(['oAuthSignIn', this.endpoint(), 'loading']);
      const isSignedIn = auth.getIn(['user', 'isSignedIn']);
      const disabled = loading || firstLoading;

      return (
        <button disabled={disabled} onClick={isSignedIn ? this.signOut : this.signIn}>
          {firstLoading
            ? 'Loading...'
            : isSignedIn ? (loading ? 'Signing out...' : 'Log out') : loading ? 'Signing in...' : 'Log in'}
        </button>
      );
    }
  }
);
