import React from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';
import Tag from '../components/Tag';
import * as C from '../common/consts';

class TagContainer extends React.Component {
  render() {
    return <Tag tag={this.props.tag} tagClick={this.props.tagClick}/>;
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
export default connect(null, mapDispatchToProps)(TagContainer)
