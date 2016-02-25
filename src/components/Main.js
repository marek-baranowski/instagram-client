require('normalize.css');
require('styles/App.scss');

import React from 'react';
import TagListContainer from '../containers/TagListContainer';
import HeaderContainer from '../containers/HeaderContainer';

class MainComponent extends React.Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        {this.props.children}
      </div>
    );
  }
}

export default MainComponent
