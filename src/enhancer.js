// @flow

import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = applyMiddleware(thunk);

export default (process.browser && process.env['NODE_ENV'] === 'development'
  ? composeWithDevTools(middleware)
  : middleware);
