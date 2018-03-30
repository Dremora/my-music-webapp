// @flow

import React from 'react';
import { injectGlobal } from 'styled-components';
import { Route } from 'react-router-dom';

import Index from '../Index';
import Album from '../Albums/Album';

import { Section, Header, H1, global } from './styles';
import logo from './logo.svg';

injectGlobal`${global}`;

export default () => {
  return (
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
  );
};
