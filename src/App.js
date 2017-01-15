import React from 'react';
import Match from 'react-router/Match';
import styled from 'styled-components';

import logo from './logo.svg';
import Library from './library';
import Album from './album';

const Header = styled.header`
  background-color: #222;
  height: 80px;
  padding: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Logo = styled.img`
  height: 60px;
`;

export default () => {
  return (
    <div>
      <Header>
        <Logo src={logo} alt="logo" />
      </Header>
      <Match exactly pattern="/" component={Library} />
      <Match exactly pattern="/albums/:id" component={Album} />
    </div>
  );
}
