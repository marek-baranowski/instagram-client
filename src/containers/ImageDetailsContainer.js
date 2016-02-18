import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as imageActions from '../actions/ImageActions';
import ImageDetails from '../components/ImageDetails';
import Loader from '../components/Loader';

class ImageDetailsContainer extends React.Component {
  componentDidMount() {
    if (!this.props.images.isFetching && this.props.images.data.length == 0) {
      this.props.fetchImageById(this.props.location.query.photoId);
    }
  }

  render() {
    if (this.props.images.isFetching) return <Loader />;
    return <ImageDetails image={_.find(this.props.images.data, {'id': this.props.location.query.photoId})}/>;
  }
}

function mapStateToProps(state) {
  return {images: state.images}
}

function mapDispatchToProps(dispatch) {
  return {
    fetchImageById: (imageId) => {
      dispatch(imageActions.fetchImageById(imageId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageDetailsContainer)
