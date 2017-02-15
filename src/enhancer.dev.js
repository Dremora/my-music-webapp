import { applyMiddleware, compose } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

import sagaMiddleware from './saga-middleware';
import DevTools from './ReduxDevTools';

export default compose(
  applyMiddleware(sagaMiddleware, reduxImmutableStateInvariant()),
  window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument()
);


