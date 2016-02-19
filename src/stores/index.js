import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import effects from 'redux-effects';
import fetch from 'redux-effects-fetch';
import multi from 'redux-multi';
import { browserHistory } from 'react-router';
import { syncHistory } from 'react-router-redux';

const reducers = require('../reducers');

module.exports = function (initialState) {
  const reduxRouterMiddleware = syncHistory(browserHistory);
  const store = createStore(reducers, applyMiddleware(reduxRouterMiddleware, thunk, multi, effects, fetch),
    initialState);
  return store
};
