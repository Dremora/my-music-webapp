// @flow

import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configure, authStateReducer } from 'redux-auth';
import Router from 'react-router/BrowserRouter';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import enhancer from './enhancer';
import DevTools from './ReduxDevTools';
import appReducer from './reducers';
import saga from './sagas';
import sagaMiddleware from './saga-middleware';
import App from './App';

const reducer = combineReducers({
  auth: authStateReducer,
  app: appReducer,
  form: formReducer
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
  <Provider store={store}>
    <div>
      <Router>
        <App />
      </Router>
      {window.devToolsExtension ? null : <DevTools />}
    </div>
  </Provider>,
  document.getElementById('root')
);
