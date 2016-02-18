import React from 'react';
import Comment from './Comment'

class CommentList extends React.Component {
  render() {
    if (!this.props.comments) return null;
    return (
      <div>
        {this.props.comments.map(function (comment, i) {
          return <Comment key={i} comment={comment}/>
        })}
      </div>
    );
  }
}

export default CommentList
