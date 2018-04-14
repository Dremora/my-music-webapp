// @flow

import 'normalize.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import Application from './routes/Application';

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('token');
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : null
      }
    });
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Application />
  </ApolloProvider>,
  document.getElementById('root')
);
