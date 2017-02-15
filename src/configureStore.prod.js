import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import todoApp from './reducers';
import saga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(todoApp, applyMiddleware(sagaMiddleware));

const enhancer = compose(
  // Middleware you want to use in development:
  applyMiddleware(sagaMiddleware)
);

export default function configureStore(initialState) {
  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  const store = createStore(todoApp, initialState, enhancer);
  sagaMiddleware.run(saga);
  return store;
}
