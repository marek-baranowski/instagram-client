import React from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';
import _ from 'lodash';
import * as imageActions from '../actions/ImageActions';
import ImageDetails from '../components/ImageDetails';
import Loader from '../components/Loader';

class ImageDetailsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchImageById(this.props.location.query.photoId);
  }

  render() {
    if (this.props.images.isFetching) return <Loader />;
    return <ImageDetails goBack={this.props.goBack}
                         image={_.find(this.props.images.data, {'id': this.props.location.query.photoId})}/>;
  }
}

function mapStateToProps(state) {
  return {images: state.images}
}

function mapDispatchToProps(dispatch) {
  return {
    fetchImageById: (imageId) => {
      dispatch(imageActions.fetchImageById(imageId))
    },
    goBack: () => {
      dispatch(routeActions.goBack())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageDetailsContainer)
