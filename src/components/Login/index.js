import React, { Fragment } from 'react';
import { graphql } from 'react-apollo';
import { compose, withHandlers, withStateHandlers } from 'recompose';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Text from '../../components/Text';

import LoginMutation from './mutation';
import { Root, Spacer, LoginLink, NewAlbumLink } from './styles';

const enhance = compose(
  graphql(LoginMutation, {
    props: ({ mutate }) => ({
      onLogin: password =>
        mutate({
          variables: {
            password
          }
        })
    })
  }),
  withStateHandlers(
    { loading: false, password: '', showingLogin: false, wrongPassword: false },
    {
      cancelLogin: () => () => ({ password: '', showingLogin: false, wrongPassword: false }),
      showLogin: () => () => ({ showingLogin: true }),
      setPassword: () => e => ({ password: e.target.value }),
      loggingStart: () => () => ({ loading: true }),
      loggingEnd: () => loggedIn => ({
        loading: false,
        password: '',
        showingLogin: !loggedIn,
        wrongPassword: !loggedIn
      })
    }
  ),
  withHandlers({
    login: ({ cancelLogin, loggingStart, loggingEnd, onLoggedIn, password, onLogin }) => async () => {
      loggingStart();
      const result = await onLogin(password);
      const loggedIn = result.data.login;
      loggingEnd(loggedIn);
      loggedIn && onLoggedIn(password);
    },
    logout: ({ onLoggedOut }) => () => {
      onLoggedOut();
    }
  })
);

const Login = ({
  cancelLogin,
  isLoggedIn,
  loading,
  login,
  logout,
  password,
  setPassword,
  showLogin,
  showingLogin,
  wrongPassword
}) => (
  <Root>
    {showingLogin ? (
      <Fragment>
        <Input
          autofocus
          disabled={loading}
          onChange={setPassword}
          placeholder={wrongPassword ? 'Sorry, try again' : 'Hey Dremora, please confirm your password'}
          type="password"
          value={password}
        />
        <Spacer />
        <Button disabled={loading} onClick={cancelLogin}>
          Cancel
        </Button>
        <Spacer />
        <Button disabled={loading || !password} onClick={login}>
          Login
        </Button>
      </Fragment>
    ) : (
      <Fragment>
        <LoginLink disabled={loading} onClick={isLoggedIn ? logout : showLogin}>
          <Text color="lighterGrey" size="small">
            {loading ? 'Loading…' : isLoggedIn ? 'Log out' : 'Login'}
          </Text>
        </LoginLink>
        {isLoggedIn && (
          <NewAlbumLink>
            <Link to="/albums/new">
              <Text color="lighterGrey" size="small">
                New album
              </Text>
            </Link>
          </NewAlbumLink>
        )}
      </Fragment>
    )}
  </Root>
);

export default enhance(Login);
