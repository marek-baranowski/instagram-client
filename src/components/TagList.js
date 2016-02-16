import React from 'react';
import { connect } from 'react-redux';
import Loader from './Loader';

class TagList extends React.Component {
  render() {
    if (this.props.tags.isFetching) return <Loader />;
    return (
      <div>
        {this.props.tags.data.map(function (image, i) {
          return <img src={image.images.thumbnail.url}/>
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {tags: state.tags}
}

export default connect(mapStateToProps)(TagList)
