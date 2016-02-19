import React from 'react';
import { connect } from 'react-redux';
import {setTags} from '../actions/TagActions';
import TagList from '../components/TagList';
import Loader from '../components/Loader';
import {TAGS} from '../common/consts';

class TagListContainer extends React.Component {
  componentDidMount() {
    this.props.setTags(TAGS);
  }

  render() {
    const {tags} = this.props;
    if (tags.isFetching) return <Loader />;
    return <TagList tags={tags}/>;
  }
}

function mapStateToProps(state) {
  return {tags: state.tags}
}

function mapDispatchToProps(dispatch) {
  return {
    setTags: (tags) => {
      dispatch(setTags(tags))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TagListContainer)
