import { applyMiddleware, compose } from 'redux';

import sagaMiddleware from './saga-middleware';

export default compose(
  applyMiddleware(sagaMiddleware)
);
