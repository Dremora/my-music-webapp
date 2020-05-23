// import 'normalize.css';

import { ApolloProvider } from "@apollo/react-hooks";
import App from "next/app";
import React from "react";

import Layout from "components/Layout";
import { LoginProvider } from "data/login";
import client from "utils/apollo";

class MyMusic extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.StrictMode>
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
