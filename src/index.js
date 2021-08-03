import React from 'react';
import ReactDOM from 'react-dom';
import Thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import rootReducer from './modules';
import MainPage from './pages/MainPage';
import './assets/styles/reset.css';

export const history = createBrowserHistory();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(Thunk)));

// rafec
ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <MainPage />
      <input type="text" />
    </Provider>
  </Router>,
  document.querySelector('#root')
);
