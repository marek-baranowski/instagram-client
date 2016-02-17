import React from 'react';
import { connect } from 'react-redux';
import Loader from './Loader';

class ImageList extends React.Component {
  render() {
    if (this.props.images.isFetching) return <Loader />;
    return (
      <div>
        {this.props.images.data.map(function (image, i) {
          return <img key={i} src={image.images.thumbnail.url}/>
        })}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  console.log(ownProps);
  return {images: state.images}
}

export default connect(mapStateToProps)(ImageList)
