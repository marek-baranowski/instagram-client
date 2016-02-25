import React from 'react';
import { connect } from 'react-redux';
import TagForm from '../components/TagForm';
import {fetchTags} from '../actions/TagActions';

class TagFormContainer extends React.Component {
  render() {
    return <TagForm searchTag={this.props.searchTag}/>;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    searchTag: (tag) => {
      dispatch(fetchTags(tag))
    }
  }
}
export default connect(null, mapDispatchToProps)(TagFormContainer)
