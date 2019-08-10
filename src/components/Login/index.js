import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Text from '../../components/Text';

import LoginMutation from './mutation';
import { Root, Spacer, LoginLink, NewAlbumLink } from './styles';

const Login = ({ isLoggedIn, onLoggedIn, onLoggedOut }) => {
  const [loginRequest, { loading }] = useMutation(LoginMutation);

  const [passwordInput, setPasswordInput] = useState('');
  const [showingLogin, setShowingLogin] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);

  const cancelLogin = () => {
    setPasswordInput('');
    setShowingLogin(false);
    setWrongPassword(false);
  };

  const showLogin = () => setShowingLogin(true);
  const setPassword = e => {
    setWrongPassword(false);
    setPasswordInput(e.target.value);
  };

  const login = async () => {
    const {
      data: { login: loggedIn }
    } = await loginRequest({ variables: { password: passwordInput } });
    setPasswordInput('');
    setShowingLogin(!loggedIn);
    setWrongPassword(!loggedIn);
    loggedIn && onLoggedIn(passwordInput);
  };

  return (
    <Root>
      {showingLogin ? (
        <>
          <Input
            autofocus
            disabled={loading}
            onChange={setPassword}
            placeholder={wrongPassword ? 'Sorry, try again' : 'Hey Dremora, please confirm your password'}
            type="password"
            value={passwordInput}
          />
          <Spacer />
          <Button disabled={loading} onClick={cancelLogin}>
            Cancel
          </Button>
          <Spacer />
          <Button disabled={loading || !passwordInput} onClick={login}>
            Login
          </Button>
        </>
      ) : (
        <>
          <LoginLink disabled={loading} onClick={isLoggedIn ? onLoggedOut : showLogin}>
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
        </>
      )}
    </Root>
  );
};

export default Login;
