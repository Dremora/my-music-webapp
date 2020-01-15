import React from 'react';
import Link from 'next/link';

import Login from 'components/Login';

import { Page, Section, Header, H1, GlobalStyles, HomeLink } from './styles';

const Layout = ({ children }) => {
  return (
    <Page>
      <GlobalStyles />
      <div>
        <Section>
          <Header>
            <Link href="/" passHref>
              <HomeLink>
                <img alt="Logo" src="/logo.svg" height={48} />
                <H1>My Music</H1>
              </HomeLink>
            </Link>
          </Header>
        </Section>
        <Section>{children}</Section>
      </div>
      <Section>
        <Login />
      </Section>
    </Page>
  );
};

export default Layout;
