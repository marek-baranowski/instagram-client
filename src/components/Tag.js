import React from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';
import * as C from '../common/consts';

class Tag extends React.Component {
  render() {
    return <button onClick={this.props.tagClick}>#{this.props.tag}</button>;
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    tagClick: () => {
      dispatch(routeActions.push({
        pathname: C.ROUTES.PHOTOS_BY_TAG,
        search: '?tag=' + ownProps.tag
      }))
    }
  }
}

export default connect(null, mapDispatchToProps)(Tag)
