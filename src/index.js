import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Router from 'react-router/BrowserRouter';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

import todoApp from './reducers';
import saga from './sagas';
import App from './App';
import './index.css';

const DevTools = createDevTools(
  (
    <DockMonitor
      toggleVisibilityKey="ctrl-h"
      changePositionKey="ctrl-q"
      defaultIsVisible={false}
    >
      <LogMonitor />
    </DockMonitor>
  )
);

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(
  applyMiddleware(sagaMiddleware),
  DevTools.instrument()
);
const store = createStore(todoApp, enhancer);

sagaMiddleware.run(saga);

ReactDOM.render(
  (
    <Provider store={store}>
      <div>
        <Router>
          <App />
        </Router>
        <DevTools />
      </div>
    </Provider>
  ),
  document.getElementById('root')
);
