import Link from "next/link";
import React from "react";

import Footer from "components/Footer";
import Menu from "components/Menu";

import { GlobalStyles, H1, Header, HomeLink, Page, Section } from "./styles";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Page>
      <GlobalStyles />
      <div>
        <Section>
          <Header>
            <Link href="/" passHref>
              <HomeLink>
                <img alt="Logo" height={48} src="/logo.svg" />
                <H1>My Music</H1>
              </HomeLink>
            </Link>
            <Menu />
          </Header>
        </Section>
        <Section>{children}</Section>
      </div>
      <Section>
        <Footer />
      </Section>
    </Page>
  );
};

export default Layout;
