import React from 'react';
import CommentListContainer from '../containers/CommentListContainer';

class ImageDetails extends React.Component {
  render() {
    const {image} = this.props;
    if(!image) return <h2>No such image</h2>;
    const time = new Date(parseInt(image.created_time)*1000).toLocaleString();
    return (
      <div className="imagedetails">
        <h2>{image.user.full_name} ({image.user.username}), at <time>{time}</time></h2>
        <img className="imagedetails__image" src={image.images.standard_resolution.url}/>
        <p>comments: {image.comments.count}, likes: {image.likes.count}</p>
        <CommentListContainer imageId={image.id} />
      </div>
    )
  }
}

export default ImageDetails
