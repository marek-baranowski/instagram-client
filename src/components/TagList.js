import React from 'react';
import { connect } from 'react-redux';
import Loader from './Loader';
import Tag from './Tag';

class TagList extends React.Component {
  render() {
    if (this.props.tags.isFetching) return <Loader />;
    return (
      <ul id="tags">
        {this.props.tags.data.map(function (tag, i) {
          return <li key={i}><Tag tag={tag}/></li>
        })}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {tags: state.tags}
}

export default connect(mapStateToProps)(TagList)
