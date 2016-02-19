require('normalize.css');
require('styles/App.css');

import React from 'react';
import TagListContainer from '../containers/TagListContainer';

class MainComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <header>Instagram client <TagListContainer/></header>
        {this.props.children}
      </div>
    );
  }
}

export default MainComponent
