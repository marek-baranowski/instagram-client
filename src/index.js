import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import configureStore from './stores';
import Main from './components/Main';
import ImageListContainer from './containers/ImageListContainer';
import ImageDetailsContainer from './containers/ImageDetailsContainer';
import * as C from './utils/consts';

const store = configureStore();

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
