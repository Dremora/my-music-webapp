import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Index from '../Index';
import NewAlbum from '../Albums/NewAlbum';
import Album from '../Albums/Album';
import Login from '../../components/Login';

import { Page, Section, Header, H1, GlobalStyles } from './styles';
import logo from './logo.svg';

export default () => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const onLoggedIn = useCallback(newToken => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
  }, []);

  const onLoggedOut = useCallback(() => {
    localStorage.removeItem('token');
    setToken(null);
  }, []);

  return (
    <Router>
      <GlobalStyles />
      <Page>
        <div>
          <Section>
            <Header>
              <img alt="Logo" src={logo} height={48} />
              <H1>My Music</H1>
            </Header>
          </Section>
          <Section>
            <Switch>
              <Route exact path="/" render={() => <Index isLoggedIn={!!token} />} />
              {token && (
                <Switch>
                  <Route exact path="/albums/new" component={NewAlbum} />
                  <Route exact path="/albums/:id" component={Album} />
                </Switch>
              )}
            </Switch>
          </Section>
        </div>
        <Section>
          <Login isLoggedIn={!!token} onLoggedIn={onLoggedIn} onLoggedOut={onLoggedOut} />
        </Section>
      </Page>
    </Router>
  );
};