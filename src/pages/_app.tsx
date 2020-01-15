// import 'normalize.css';
import 'utils/polyfill-fetch';

import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import Layout from 'components/Layout';
import { LoginProvider } from 'data/login';
import client from 'utils/apollo';

const MyMusic = ({ Component, pageProps }) => (
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

export default MyMusic;
