import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Router from 'react-router/BrowserRouter';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import enhancer from './enhancer';
import DevTools from './ReduxDevTools';
import appReducer from './reducers';
import saga from './sagas';
import sagaMiddleware from './saga-middleware';
import App from './App';
import './index.css';

const reducer = combineReducers({ app: appReducer, form: formReducer });
const store = createStore(reducer, enhancer);
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
