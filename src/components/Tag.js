import React from 'react';

class Tag extends React.Component {
  onClick() {
    this.props.tagClick();
    return false;
  }
  render() {
    return <a href="#" className="header__tag" onClick={this.props.tagClick.bind(this)}>#{this.props.tag}</a>;
  }
}

export default Tag
