import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Router from 'react-router/BrowserRouter';
import { createStore } from 'redux';

import enhancer from './enhancer';
import DevTools from './ReduxDevTools';
import appReducer from './reducers';
import saga from './sagas';
import sagaMiddleware from './saga-middleware';
import App from './App';
import './index.css';

const store = createStore(appReducer, enhancer);
sagaMiddleware.run(saga);

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
