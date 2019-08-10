import 'normalize.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import introspectionQueryResultData from './fragmentTypes.json';

import Application from './routes/Application';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
});

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_API_URL || '/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : null
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({ fragmentMatcher })
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Application />
  </ApolloProvider>,
  document.getElementById('root')
);
