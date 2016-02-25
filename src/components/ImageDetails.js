import React from 'react';
import CommentListContainer from '../containers/CommentListContainer';
import moment from 'moment';

class ImageDetails extends React.Component {
  render() {
    const {image} = this.props;
    if (!image) return <h2>No such image</h2>;
    const time = moment.unix(parseInt(image.created_time)).format('hh:mm YYYY-MM-DD');
    return (
      <div className="imagedetails">
        <button className="imagedetails__goback btn" onClick={this.props.goBack}>Go Back</button>
        <h2>{image.user.full_name} ({image.user.username}), at&nbsp;
          <time>{time}</time>
        </h2>
        <img className="imagedetails__image" src={image.images.standard_resolution.url}/>
        <p>comments: {image.comments.count}, likes: {image.likes.count}</p>
        <CommentListContainer imageId={image.id}/>
      </div>
    )
  }
}

export default ImageDetails
