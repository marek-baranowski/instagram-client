import React from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';
import * as imageActions from '../actions/ImageActions';
import TagList from '../components/TagList';
import Loader from '../components/Loader';
import * as C from '../common/consts';

class TagListContainer extends React.Component {
  render() {
    const {tags} = this.props;
    if (tags.isFetching) return <Loader />;
    return <TagList tags={tags}/>;
  }
}

function mapStateToProps(state) {
  return {tags: state.tags}
}

export default connect(mapStateToProps)(TagListContainer)
