import React from 'react';

class CommentList extends React.Component {
  render() {
    if (!this.props.comments) return null;
    return (
      <ul>
        {this.props.comments.map(function (comment, i) {
          return <li key={i}>xxx</li>
        })}
      </ul>
    );
  }
}

export default CommentList;
