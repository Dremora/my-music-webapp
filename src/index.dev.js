import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Router from 'react-router/BrowserRouter';

import App from './App';
import './index.css';
import configureStore from './configureStore.js';
import DevTools from './ReduxDevTools.js';

const store = configureStore();

ReactDOM.render(
  (
    <Provider store={store}>
      <div>
        <Router>
          <App />
        </Router>
        { !window.devToolsExtension ? <DevTools /> : null }
      </div>
    </Provider>
  ),
  document.getElementById('root')
);
