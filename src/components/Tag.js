import React from 'react';
import { connect } from 'react-redux';

class Tag extends React.Component {
  render() {
    return <a href={'#' + this.props.tag}>#{this.props.tag}</a>;
  }
}

export default connect()(Tag)
