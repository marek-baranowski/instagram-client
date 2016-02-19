import React from 'react';

class Tag extends React.Component {
  render() {
    return <button onClick={this.props.tagClick}>#{this.props.tag}</button>;
  }
}

export default Tag
