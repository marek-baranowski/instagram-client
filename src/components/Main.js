require('normalize.css');
require('styles/App.scss');

import React from 'react';
import TagListContainer from '../containers/TagListContainer';

class MainComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <header className="header clearfix">
          <div className="header__logo">Instagram client</div>
          <TagListContainer/>
        </header>
        {this.props.children}
      </div>
    );
  }
}

export default MainComponent
