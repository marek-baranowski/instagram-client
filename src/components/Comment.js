import React from 'react';

class Comment extends React.Component {
  render() {
    const {comment} = this.props;
    const time = new Date(parseInt(comment.created_time) * 1000).toLocaleString();
    return (
      <div className="comment clearfix">
        <div className="comment-profile-picture"><img src={comment.from.profile_picture}/></div>
        <div className="comment-content">
          <div className="comment-header">{comment.from.username} at
            <time>{time}</time>
          </div>
          <div className="comment-text">{comment.text}</div>
        </div>
      </div>
    )
  }
}

export default Comment
