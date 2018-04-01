// @flow

import React from 'react';
import { injectGlobal } from 'styled-components';
import { Route } from 'react-router-dom';
import { compose, withStateHandlers } from 'recompose';

import Index from '../Index';
import Album from '../Albums/Album';
import Login from '../../components/Login';

import { Page, Section, Header, H1, global } from './styles';
import logo from './logo.svg';

injectGlobal`${global}`;

const enhance = compose(
  withStateHandlers(
    { isLoggedIn: false },
    {
      onLoggedIn: () => () => ({ isLoggedIn: true }),
      onLoggedOut: () => () => ({ isLoggedIn: false })
    }
  )
);

export default enhance(({ isLoggedIn, onLoggedIn, onLoggedOut }) => (
  <Page>
    <div>
      <Section>
        <Header>
          <img alt="Logo" src={logo} height={48} />
          <H1>My Music</H1>
        </Header>
      </Section>
      <Section>
        <Route exact path="/" component={Index} />
        <Route exact path="/albums/:id" component={Album} />
      </Section>
    </div>
    <Section>
      <Login isLoggedIn={isLoggedIn} onLoggedIn={onLoggedIn} onLoggedOut={onLoggedOut} />
    </Section>
  </Page>
));
