require('normalize.css');
require('styles/App.css');

import React from 'react';
import { connect } from 'react-redux';
import TagListContainer from '../containers/TagListContainer';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <header>Instagram client <TagListContainer/></header>
        {this.props.children}
      </div>
    );
  }
}

export default connect()(AppComponent)
