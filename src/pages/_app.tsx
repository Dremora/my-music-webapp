import "styles/global.css";

import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import Head from "next/head";

import Layout from "components/Layout";
import { LoginProvider } from "data/login";
import client from "utils/apollo";

export default function MyMusicApp({ Component }: AppProps) {
  return (
    <>
      <Head>
        <link href="/favicon.ico" rel="icon" />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:400,700&amp;subset=latin-ext"
          rel="stylesheet"
        />
        <script src="https://polyfill.io/v3/polyfill.min.js?features=ResizeObserver" />
        <title>My Music</title>
      </Head>
      <ApolloProvider client={client}>
        <LoginProvider>
          <Layout>
            <Component />
          </Layout>
        </LoginProvider>
      </ApolloProvider>
    </>
  );
}
