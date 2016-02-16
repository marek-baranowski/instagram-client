import React from 'react';
import { connect } from 'react-redux';

class Loader extends React.Component {
  render() {
    return (
      <p>Loading...</p>
    );
  }
}

export default connect()(Loader)
