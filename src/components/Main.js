require('normalize.css');
require('styles/App.scss');

import React from 'react';
import HeaderContainer from '../containers/HeaderContainer';

class MainComponent extends React.Component {
  render() {
    return (
      <div className="main">
        <HeaderContainer />
        {this.props.children}
      </div>
    );
  }
}

export default MainComponent
