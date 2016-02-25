import React from 'react';
import { connect } from 'react-redux';
import {fetchTags} from '../actions/TagActions';
import TagList from '../components/TagList';
import Loader from '../components/Loader';

class TagListContainer extends React.Component {
  componentDidMount() {
    //this.props.fetchTags('snow');
  }

  render() {
    const {tags} = this.props;
    if (tags.isFetching) return <Loader />;
    return <TagList tags={tags.data}/>;
  }
}

function mapStateToProps(state) {
  return {tags: state.tags}
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTags: (tag) => {
      dispatch(fetchTags(tag))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TagListContainer)
