import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Index from '../Index';
import NewAlbum from '../Albums/NewAlbum';
import Album from '../Albums/Album';
import Years from '../Years';
import Login from '../../components/Login';

import { Page, Section, Header, H1, GlobalStyles, HomeLink } from './styles';
import logo from './logo.svg';
import { LoginProvider } from '../../data/login';

const ApplicationRoute = () => (
  <LoginProvider>
    <Router>
      <GlobalStyles />
      <Page>
        <div>
          <Section>
            <Header>
              <HomeLink to="/">
                <img alt="Logo" src={logo} height={48} />
                <H1>My Music</H1>
              </HomeLink>
            </Header>
          </Section>
          <Section>
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/years" component={Years} />
              <Route exact path="/albums/new" component={NewAlbum} />
              <Route exact path="/albums/:id" component={Album} />
            </Switch>
          </Section>
        </div>
        <Section>
          <Login />
        </Section>
      </Page>
    </Router>
  </LoginProvider>
);

export default ApplicationRoute;
