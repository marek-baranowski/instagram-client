import React from 'react';
import { connect } from 'react-redux';
import * as commentActions from '../actions/CommentActions';
import CommentList from '../components/CommentList';
import Loader from '../components/Loader';

class CommentListContainer extends React.Component {
  componentDidMount() {
    this.props.fetchComments(this.props.imageId);
  }

  render() {
    if (this.props.comments.isFetching) return <Loader />;
    return <CommentList comments={this.props.comments.data}/>;
  }
}

function mapStateToProps(state) {
  return {comments: state.comments}
}

function mapDispatchToProps(dispatch) {
  return {
    fetchComments: (photoId) => {
      dispatch(commentActions.fetchComments(photoId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentListContainer)
