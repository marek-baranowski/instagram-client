import React from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';
import * as C from '../common/consts';
import Loader from './Loader';

class ImageList extends React.Component {
  render() {
    if (this.props.images.isFetching) return <Loader />;
    return (
      <div>
        {this.props.images.data.map(function (image, i) {
          return <img key={i} onClick={this.props.imageClick.bind(null, image.id)} src={image.images.thumbnail.url}/>
        }.bind(this))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {images: state.images}
}

function mapDispatchToProps(dispatch) {
  return {
    imageClick: (photoId) => {
      dispatch(routeActions.push({
        pathname: C.ROUTES.PHOTO_DETAILS,
        search: '?photoId=' + photoId
      }))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageList)
