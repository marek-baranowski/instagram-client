import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores';
//import App from './containers/App';
import Main from './components/Main';
import * as imageActions from './actions/ImageActions';
import * as tagActions from './actions/TagActions';

const store = configureStore();

console.log(store.getState());
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(imageActions.fetchImages());
store.dispatch(tagActions.setTags(["audi", "bmw", "mercedez"]));

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app')
);
