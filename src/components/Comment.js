import React from 'react';

class Comment extends React.Component {
  render() {
    const {comment} = this.props;
    const time = new Date(parseInt(comment.created_time) * 1000).toLocaleString();
    return (
      <div className="comments clearfix">
        <div className="comments__profile-picture"><img src={comment.from.profile_picture}/></div>
        <div className="comments__content">
          <div className="comments__header">{comment.from.username} at&nbsp;
            <time>{time}</time>
          </div>
          {comment.text}
        </div>
      </div>
    )
  }
}

export default Comment
