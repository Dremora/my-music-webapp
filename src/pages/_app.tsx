// import 'normalize.css';

import { ApolloProvider } from "@apollo/client";
import App from "next/app";
import Head from "next/head";
import React from "react";

import Layout from "components/Layout";
import { LoginProvider } from "data/login";
import client from "utils/apollo";

class MyMusic extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.StrictMode>
        <Head>
          <title>My Music</title>
        </Head>
        <ApolloProvider client={client}>
          <LoginProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </LoginProvider>
        </ApolloProvider>
      </React.StrictMode>
    );
  }
}

export default MyMusic;
