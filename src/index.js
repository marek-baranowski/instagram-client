import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import configureStore from './stores';
import Main from './components/Main';
import ImageListContainer from './containers/ImageListContainer';
import ImageDetailsContainer from './containers/ImageDetailsContainer';
import * as tagActions from './actions/TagActions';
import * as C from './common/consts';

const store = configureStore();

console.log(store.getState());
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(tagActions.setTags(['audi', 'bmw', 'mercedez']));

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={ImageListContainer}/>
        <Route path={C.ROUTES.PHOTOS_BY_TAG} component={ImageListContainer}/>
        <Route path={C.ROUTES.PHOTO_DETAILS} component={ImageDetailsContainer}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
