import React from 'react';

class ImageDetails extends React.Component {
  render() {
    if(!this.props.image) return <h2>No such image</h2>;
    return (
      <div>
        <h2>{this.props.image.user.full_name} ({this.props.image.user.username}), at</h2>
        <img src={this.props.image.images.standard_resolution.url}/>
      </div>
    )
  }
}

export default ImageDetails;
