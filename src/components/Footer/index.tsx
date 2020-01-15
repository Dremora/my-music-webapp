import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import Link from 'next/link';

import { useLogin } from 'data/login';
import Button from 'components/Button';
import Input from 'components/Input';
import Text from 'components/Text';

import LOGIN from './mutation';
import { Login as LoginType, LoginVariables } from './types/Login';
import { Root, Spacer, LoginLink, NewAlbumLink } from './styles';

const Footer = () => {
  const { isLoggedIn, onLoggedIn, onLoggedOut } = useLogin();
  const [loginRequest, { loading }] = useMutation<LoginType, LoginVariables>(LOGIN);

  const [passwordInput, setPasswordInput] = useState('');
  const [showingLogin, setShowingLogin] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);

  const cancelLogin = () => {
    setPasswordInput('');
    setShowingLogin(false);
    setWrongPassword(false);
  };

  const showLogin = () => setShowingLogin(true);
  const setPassword = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setWrongPassword(false);
    setPasswordInput(e.target.value);
  };

  const login = async () => {
    const result = await loginRequest({ variables: { password: passwordInput } });
    setPasswordInput('');
    if (!result.data || !result.data.login) {
      setWrongPassword(true);
    } else {
      setShowingLogin(false);
      setWrongPassword(false);
      onLoggedIn(passwordInput);
    }
  };

  return (
    <Root>
      {showingLogin ? (
        <>
          <Input
            autoFocus
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
            <Link href="/albums/new" passHref>
              <NewAlbumLink>
                <Text color="lighterGrey" size="small">
                  New album
                </Text>
              </NewAlbumLink>
            </Link>
          )}
        </>
      )}
    </Root>
  );
};

export default Footer;
