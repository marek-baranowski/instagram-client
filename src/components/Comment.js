import React from 'react';
import moment from 'moment';

class Comment extends React.Component {
  render() {
    const {comment} = this.props;
    const time = moment.unix(parseInt(comment.created_time)).format('hh:mm YYYY-MM-DD');
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
