import React from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';
import * as C from '../common/consts';

class Tag extends React.Component {
  render() {
    return <button onClick={this.props.tagClick}>#{this.props.tag}</button>;
  }
}

export default Tag
