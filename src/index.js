import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import todoApp from './reducers';
import saga from './sagas';
import App from './App';
import './index.css';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(todoApp, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga);

ReactDOM.render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  document.getElementById('root')
);
