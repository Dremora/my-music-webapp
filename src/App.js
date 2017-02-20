// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Match from 'react-router/Match';
import styled from 'styled-components';
import { oAuthSignIn, signOut } from 'redux-auth';

import logo from './logo.svg';
import Library from './library';
import Album from './album';

const Header = styled.header`
  background-color: #222;
  height: 80px;
  padding: 20px;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  height: 60px;
`;

const FacebookSignInButton = connect(({ auth }) => ({ auth }))(
  class FacebookSignInButton extends Component {
    signIn = () => {
      this.props.dispatch(oAuthSignIn({ provider: 'facebook' }));
    };

    signOut = () => {
      this.props.dispatch(signOut(this.endpoint()));
    };

    endpoint() {
      return this.props.auth.getIn(['configure', 'currentEndpointKey']) ||
        this.props.auth.getIn(['configure', 'defaultEndpointKey']);
    }

    render() {
      const { auth } = this.props;
      const firstLoading = auth.getIn(['authentication', 'loading']);
      const loading = auth.getIn(['oAuthSignIn', this.endpoint(), 'loading']);
      const isSignedIn = auth.getIn(['user', 'isSignedIn']);
      const disabled = loading || firstLoading;

      return (
        <button
          disabled={disabled}
          onClick={isSignedIn ? this.signOut : this.signIn}
        >
          {firstLoading ? 'Loading...' : (isSignedIn
            ? loading ? 'Signing out...' : 'Log out'
            : loading ? 'Signing in...' : 'Log in')}
        </button>
      );
    }
  }
);

export default () => {
  return (
    <div>
      <Header>
        <Logo src={logo} alt="logo" />
        <FacebookSignInButton />
      </Header>
      <Match exactly pattern="/" component={Library} />
      <Match exactly pattern="/albums/:id" component={Album} />
    </div>
  );
};
