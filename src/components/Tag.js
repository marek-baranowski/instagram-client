import React from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';
import * as C from '../common/consts';

class Tag extends React.Component {
  render() {
    return <button onClick={() => this.props.dispatch(
    routeActions.push({
      pathname: C.ROUTES.PHOTOS_BY_TAG,
      search: '?tag=' + this.props.tag
}))}>#{this.props.tag}</button>;
  }
}

export default connect()(Tag)
