import React from 'react';
import CommentListContainer from '../containers/CommentListContainer';

class ImageDetails extends React.Component {
  render() {
    if(!this.props.image) return <h2>No such image</h2>;
    let time = new Date(parseInt(this.props.image.created_time)*1000).toLocaleString();
    return (
      <div>
        <h2>{this.props.image.user.full_name} ({this.props.image.user.username}), at <time>{time}</time></h2>
        <img src={this.props.image.images.standard_resolution.url}/>
        <p>comments: {this.props.image.comments.count}, likes: {this.props.image.likes.count}</p>
        <CommentListContainer imageId={this.props.image.id} />
      </div>
    )
  }
}

export default ImageDetails;
