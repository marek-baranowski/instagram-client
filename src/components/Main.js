require('normalize.css');
require('styles/App.scss');

import React from 'react';
import Header from '../components/Header';

class MainComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default MainComponent
