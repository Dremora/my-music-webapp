import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import sagaMiddleware from './saga-middleware';

export default compose(
  applyMiddleware(sagaMiddleware, thunk)
);
