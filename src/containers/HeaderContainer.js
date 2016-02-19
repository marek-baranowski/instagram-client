import React from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';
import Header from '../components/Header';

class TagContainer extends React.Component {
  render() {
    return <Header logoClick={this.props.logoClick} />;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logoClick: () => {
      dispatch(routeActions.push({pathname: '/'}))
    }
  }
}
export default connect(null, mapDispatchToProps)(TagContainer)
