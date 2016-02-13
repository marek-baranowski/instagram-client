import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import effects from 'redux-effects'
import fetch from 'redux-effects-fetch'
import multi from 'redux-multi'
const reducers = require('../reducers');

module.exports = function(initialState) {
  const store = createStore(reducers, applyMiddleware(thunk, multi, effects, fetch), initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
