// @flow

import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configure, authStateReducer } from 'redux-auth';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import enhancer from './enhancer';
import appReducer from './reducers';
import saga from './sagas';
import sagaMiddleware from './saga-middleware';
import App from './App';

const client = new ApolloClient({
  // By default, this client will send queries to the
  //  `/graphql` endpoint on the same host
  link: new HttpLink(),
  cache: new InMemoryCache()
});

const reducer = combineReducers({
  auth: authStateReducer,
  app: appReducer
});
const store = createStore(reducer, enhancer);
sagaMiddleware.run(saga);

const reduxAuthConfig = {
  apiUrl: '',
  authProviderPaths: {
    facebook: 'http://localhost:4200/auth/facebook'
  },
  tokenValidationPath: 'http://localhost:3000/auth/validate_token'
};

store.dispatch(configure(reduxAuthConfig, { clientOnly: true }));

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);
