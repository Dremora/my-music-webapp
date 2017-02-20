import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

import sagaMiddleware from './saga-middleware';
import DevTools from './ReduxDevTools';

export default compose(
  applyMiddleware(sagaMiddleware, thunk),
  window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument()
);


