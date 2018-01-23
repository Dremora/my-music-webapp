// @flow

import React from 'react';
import { injectGlobal } from 'styled-components';
import { Route } from 'react-router-dom';

import Index from '../Index';
import Album from '../Albums/Album';
import FacebookSignInButton from '../../components/FacebookSignInButton';

import { Section, Header, H1, global } from './styles';

injectGlobal`${global}`;

export default () => {
  return (
    <div>
      <Section>
        <Header>
          <H1>My Music</H1>
          {/* <FacebookSignInButton /> */}
        </Header>
      </Section>
      <Section>
        <Route exact path="/" component={Index} />
        <Route exact path="/albums/:id" component={Album} />
      </Section>
    </div>
  );
};
