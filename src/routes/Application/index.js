// @flow

import React from 'react';

import { Route } from 'react-router-dom';

import logo from './logo.svg';
import Index from '../Index';
import Album from '../Albums/Album';
import FacebookSignInButton from '../../components/FacebookSignInButton';

import { Header, Logo } from './styles';

export default () => {
  return (
    <div>
      <Header>
        <Logo src={logo} alt="logo" />
        <FacebookSignInButton />
      </Header>
      <Route exact path="/" component={Index} />
      <Route exact path="/albums/:id" component={Album} />
    </div>
  );
};
